import React from 'react'
class EventHandlers extends React.Component{
    constructor(props){
        super(props)
        this.state={count:0 , name:"Mustafa"}
        //binding is necessary to make 'this' point to the correct object
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        //increments the count of the state
        this.setState((prevState,props)=>{
            return {name:"test"}
            
        })
    }
    render(){
        //renders a button that displays the state
        return <button onClick={this.clickHandler}>{this.state.name}</button>
        // <button onClick={this.clickHandler}>{this.state.name}</button>
    }
}

export default EventHandlers;