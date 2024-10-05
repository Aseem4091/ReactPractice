import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      message:"Hello"
    }
  }
  onClickHandler(){
    this.setState({
      message:"Goodbye jaani"
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.onClickHandler.bind(this)}>
          Click
        </button>
      </div>
    )
  }
}

export default EventBind