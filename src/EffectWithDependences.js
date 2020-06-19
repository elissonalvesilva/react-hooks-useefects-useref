import React, { useState, useEffect, useRef } from 'react';


function EffectWithDependences() {
  const inputEl = useRef(null);

  const [list, setList] = useState([]);
  const [oldList, setOldList] = useState([]);
  const [filter, setFilter] = useState("");


  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
      const data = await response.json();
      setList(data);
      setOldList(data);
    }

    getData();
  }, []);


  useEffect(() => {
    const data = oldList.filter(({title}) => {
      return title.toLowerCase().includes(filter.toLowerCase());
    });
    setList(data);
  }, [filter, oldList]);

  function handleClick(){
    const value = inputEl.current.value;
    setFilter(value);
  };

  
  
  return (
    <>
      <ul>
        {
          list.map((item, key) => (
            <li key={key}> {item.title}</li>
          ))
        }
      </ul>
      <input type="text" ref={inputEl}/>
      <button onClick={handleClick}>Find Id</button>
    </>
  );
}

export default EffectWithDependences;