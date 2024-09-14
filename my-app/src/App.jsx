import React, { useState } from 'react';
import Products from './Products';

function App() {
  const result = 2 + 2; // Calculate result here
 var [a,b]=useState(69);
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
      <h1 className="w-44 h-32 rounded-xl bg-red-600">{result}</h1>
      <div>
      <h3 className="text-blue-600">hello bro kaise ho</h3>
      </div>

    <Products age="25" data={{age:25, name:"Aseem"}} />
    <div className='text-white'>{a+1}</div>
    <button onClick={()=>b(a+1)} className='px-3 py-1 bg-green-500 rounded-md text-sm'>click</button>
    </div>
  );
}

export default App;
