# React Hooks (useEffect, useState, useRef)

## setup
 - build dependences
> yarn 

 - run
> yarn start

## Examples

1 - Simple useEffect

****
* Simple using effect using button and counter

```javascript
import React, { useEffect, useState } from 'react';


function EffectExamples() {

  const [ counter, setCounter ] = useState(0);

  useEffect(() => {
    document.title = counter;

    // component will unmount
    return () => document.title = 'React App';

  }, [counter]);

  return (
      <>
        <h1>{ counter }</h1>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
      </>
  );
}

export default EffectExamples;

```

2 - Using Effect with axios async

****
* useEffect with axios to get repositories from github

```javascript
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

```

3 - using UseEffect to Filter by button and when user on change the input value

****
* Filter value by input (when user on change value the function filter post list the was getting from api)
* Get post by id when user change the input value using a number id

```javascript
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

```

4 - Using Effect with filter by input and setting the dependences

****
* when user set a value in input and press a button to filter, the function handleClick set a value filter value and after using _useEffect_ we filter the list that was getting from api

```javascript
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

```