import React from 'react'
import Person from './Person';
function NameList() {
    const PersonNames=['Aseem','Bhanu','Shanky','Aseem'];
    const name= [
        {
          name: "Aseem Chaudhary",
          age: 25,
          occupation: "Software Developer",
          location: "Toronto, Canada",
        },
        {
          name: "Bhanu Kumar",
          age: 28,
          occupation: "Data Analyst",
          location: "New Delhi, India",
        },
        {
          name: "Emily Johnson",
          age: 32,
          occupation: "Project Manager",
          location: "San Francisco, USA",
        },
        {
          name: "Liam Smith",
          age: 22,
          occupation: "Graphic Designer",
          location: "London, UK",
        },
        {
          name: "Olivia Martinez",
          age: 30,
          occupation: "UX Designer",
          location: "Barcelona, Spain",
        }
      ];
      
    const nameLsit=name.map(names=>(<Person key={name.name} names={names}/>))
    const Names=PersonNames.map((names,index)=>(<h2 key={index}>{index} {names}</h2>))
  return (
    <div>
        {Names}
    </div>
  )
}

export default NameList