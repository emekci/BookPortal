import React from 'react'
class Button extends React.Component{
    render(){
        return(
            <button onClick={()=> {this.props.clickHandler(this.props.id,this.props.value)}}>
            {this.props.value} </button>
        )
    }
}

export default Button;