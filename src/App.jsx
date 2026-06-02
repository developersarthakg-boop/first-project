import React from 'react'
import Counter from './Counter'

function App() {
  return (
    <div><p>This is the react application that would lead me to 50 lakhs of package.</p>
    <Counter />
    <Apple />
    <Cars />
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

function Cars(){
  return(
    <div>
      <h2>10 lakhs cars sold in a minute</h2>
    </div>
  )
}

export default App