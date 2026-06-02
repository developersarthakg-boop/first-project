import React from 'react'
import Counter from './Counter'

function App() {
  return (
    <div><p>This is the react application that would lead me to 50 lakhs of package.</p>
    <Counter />
    <Apple />
    <Banana />
    </div>
  )
}

function Apple(){
  return(
    <div>
      <h2>5 lakhs mobile sold in a minute</h2>
    </div>
  )
}


function Banana(){
  return(
    <div>
      <h2>50 lakhs Banana sold in a minute</h2>
    </div>
  )
}

export default App