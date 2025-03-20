import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-amber-700'>Hello, Vite + React!</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
    </>
  )
}

export default App
