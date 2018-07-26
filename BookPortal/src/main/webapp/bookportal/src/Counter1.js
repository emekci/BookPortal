import React from 'react'
class Counter1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {message:"initial message"}
    }

    componentDidMount(){

        this.setState((prevState,props)=>{
            return {message:prevState.message + '!'}
        });
        this.setState((prevState,props)=>{
            return {message:prevState.message + '!'}
        });
        this.setState((prevState,props)=>{
            return {message:prevState.message + '!'}
        });
        this.setState((prevState,props)=>{
            return {message:prevState.message + '!'}
        });
        
    }
    render(){
        return <div>Message:{this.state.message}</div>
    }
    }
    export default Counter1;