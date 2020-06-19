import React, { useState, useEffect } from 'react';

function EffectWithAxios() {
  
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://api.github.com/users/ElissonAlvesSilva/repos');
      const data = await response.json();
      
      setList(data);
    }

    getData();
  })
 
  return (
    <>
      <ul>
        {
          list.map((item, key) => (
            <li key={key}> {item.name}</li>
          ))
        }
      </ul>
    </>
  );
}
export default EffectWithAxios;