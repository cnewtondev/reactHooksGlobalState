import React, { useState } from 'react';
import { setGlobalState } from './global';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  if(count == 0){
    setGlobalState("myArr", count)
  }

  const sendToGlobal = () =>{
    setCount(count + 1)
    setGlobalState("myArr", count)
  }

  return (
    <div>
      <button onClick={sendToGlobal}>
        Click me
      </button>
    </div>
  );
}

export default Example;