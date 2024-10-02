import React, { useState } from 'react';
import Products from './Products';
import Greet from './Greet';
import Message from './Message';

function App() {
  return (
    <div >
     {/* <Greet name="Bruce Lee" heroname="batman">
      <p>This is new element</p>
      </Greet>
     <Greet name="Michael Clarke" heroname="Spiderman">
      <button>Click me </button>
      </Greet>
     <Greet name="Diana Penty" heroname="Catman"/> */}
     <Message/>
    </div>
  );
}

export default App;
