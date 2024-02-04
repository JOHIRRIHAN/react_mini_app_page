import React from 'react';
import Background from "./components/Background";
import Foreground from "./components/Foreground";

function App() {
  return (
    <div className='relative bg-zinc-800 f-full h-screen'>
      <Background />
      <Foreground />
      
    </div>
  )
}

export default App