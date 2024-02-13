// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>{`<>DevRooms</>`}</h1>
      <form>
        <input type="text" placeholder='UserName...'/>
        <input type="number" placeholder='UserExperience...'/>
        <select name="" id="">
          <option>--Select framework--</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
        </select>
        <button>Join room</button>
      </form>
    </>
  )
}

export default App
