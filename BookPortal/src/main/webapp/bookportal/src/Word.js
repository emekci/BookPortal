import React from 'react';
//import Button from '/.Button';
class Word extends React.Component{
    constructor(props){
        super(props);
        this.state= {value:"", array:[], score:0 }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        var vl = event.target.value
        var name = event.target.name
        this.setState({[name]:vl});
       
    }
    validate(event){
     let newArray = this.state.array.slice
     newArray.push({value:this.state.value})
     this.setState({array:newArray,value:""})
     event.preventDefault()
    }
    render(){
        return(

            <div>
                <form onSubmit={this.validate}>
                    <input type="text" name="value" value={this.state.value} onChange={this.handleChange}></input>
                    <input type="submit" value="submit"/>
                 </form>
                 <div> {this.state.array.map(function(arrayItem,i){
                     return(
                         <li>{arrayItem}</li>
                     )
                 })}  </div>
            </div>
        )
    }
}
export default Word;