// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team';
import Counter from './assets/counter';
import User from './User';
import Friends from './Friends';

function App() {
  // const [count, setCount] = useState(0)
  
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () => {
    alert('button clicked2')
  }
  const addToFive = (num) =>{
    alert(num + 5)
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      {/* <User></User> */}
      <Friends></Friends>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>check here</button>
      {/*arrow function in html */}
      <button onClick={()  => {
        alert('I am third')
      }}>Third Button</button>
      <button onClick={() => addToFive(3)}>Add Number</button>
    </>
  )
}

export default App
