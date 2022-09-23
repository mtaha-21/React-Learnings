import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message: 'Good Bye'
        })
        console.log(this)
    }
    
    // clickHandler=()=>{
    //     this.setState({
    //         message: 'Good Bye'
    //     })
    //     // console.log(this)    forth approach -  class property as arrow function
    // }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>      //this is the first approach - Binding in render */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button>          //this is the second approach - arrow function in render*/}
        <button onClick={this.clickHandler}>Click</button> {/* This is third approach - Binding in class constructor*/}
      </div>
    )
  }
}

export default EventBind