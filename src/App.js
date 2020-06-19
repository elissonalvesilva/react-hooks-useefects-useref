import React, { useState } from 'react';
import './App.css';

import EffectExample from './EffectExample';
import EffectWithAxios from './EffectWithAxios';
import EffectWithFilter from './EffectWithFilter';
import EffectWithDependences from './EffectWithDependences';


function App() {

  const [visible, setVisible] = useState(true); 

  setTimeout(() => setVisible(false), 5000);

  return (
    <div className="App">
      {
        visible && <EffectExample />
      }
      <EffectWithAxios />
      <hr/> 
      <EffectWithFilter />
      <EffectWithDependences />
    </div>
  );
}

export default App;
