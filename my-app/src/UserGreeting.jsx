import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
// let message
// if(this.state.isLoggedIn){
//     message=<div>Welcome Aseem</div>

// }else{
//     message=<div>Welcome Bhanu </div>
// }
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>
    //             Welcome Aseem
    //         </div>
    //     )
    // }
        // else{
        //     return(
        // <div>Welcome Bhanu</div>
        //     )
        // }
        // return( <div>{message}</div>)
        return(this.state.isLoggedIn ?
            <div>Welcome Aseem</div>:
            <div>Welcome Bhanu</div>
        )
        
}
    // return (
    //   <div><div>
    //     Welcome Aseem
    //     </div>
    //     <div>
    //         Welcome Bhanu
    //         </div></div>
    // )
  }


export default UserGreeting