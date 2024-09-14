import React, { useState } from 'react'

function Products({age,data}) {
    const [a,b]=useState(true);
  return (
    <>
    <h1 className='text-white'>{age}</h1>
    <h2>{data.age}</h2>
    <h2>{data.name}</h2>
    <h4 className={`${a===false?"text-red-600":"text-blue-600"}`}>{a=== false?"hello":"hey"}</h4>
    <button onClick={()=>b(!a)}>Change</button>
    </>
  )
}

export default Products