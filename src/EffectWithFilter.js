import React, { useState, useEffect, useRef } from 'react';

function EffectWithFilter() {
  
  const inputEl = useRef(null);

  const [list, setList] = useState([]);
  const [oldList, setOldList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
      const data = await response.json();
      setList(data);
      setOldList(data);
    }

    getData();
  }, []);

  function handleClick(){
    const value = inputEl.current.value;
    const getDataFiltered = async (value) => {
      const response = await fetch(`https://my-json-server.typicode.com/typicode/demo/posts/${value}`);
      const data = await response.json();
      setList([data]);
    }

    getDataFiltered(value);
  };

  function handleChange() {
    const { value } = inputEl.current;

    const data = oldList.filter(({title}) => {
      return title.toLowerCase().includes(value.toLowerCase())  ;
    });
        
    setList(data) ;
    if(value === '' || !data) setList(oldList); 
  }

 
  return (
    <>
      <ul>
        {
          list.map((item, key) => (
            <li key={key}> {item.title}</li>
          ))
        }
      </ul>
      <input type="text" ref={inputEl} onChange={handleChange}/>
      <button onClick={handleClick}>Find Id</button>
    </>
  );
}
export default EffectWithFilter;