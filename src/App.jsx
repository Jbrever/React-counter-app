import { useState } from 'react'
import Hello from './first'
function App() {
  
  let [count , setvalue] = useState(0);
  let [errorValue , setErrorValue] = useState(null);
  function increase(){    
    setvalue(count + 1);
    setErrorValue(null);
  }
  function decrease(){
    if(count > 0){
      setvalue(count - 1);
      setErrorValue(null);
    }
    else{
      // alert('value can\'t be decrease more')
    setErrorValue('value can\'t be decrease more');
    }
  }

  return (
    <>
       <h1>Counter App</h1>
       <h1>Counter value : {count}</h1>
       <p>{errorValue}</p>
       <button onClick={increase}>Increase</button>
       <br/>
       <button onClick={decrease}>Derease</button>
    </>
  )
}


export default App
