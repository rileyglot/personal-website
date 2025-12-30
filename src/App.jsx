import { useState } from 'react'
import myLogo from '/Rileyglot-with-image.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://ultimateframedata.com/steve" target="_blank">
          <img src={myLogo} className="logo" alt="my logo!" />
        </a>
      </div>
      <h1>Hello!</h1>
      <h4>I will be 99 woodcutting soon</h4>
      <h5>probably</h5>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count * 10 - (count - 1)}
        </button>
      </div>
    </>
  )
}

export default App