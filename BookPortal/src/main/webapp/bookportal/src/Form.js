import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:"" , surname:"", password:"",cpassword:"" , msg:""}
        this.handleChange = this.handleChange.bind(this)
        this.validate = this.validate.bind(this)
    }
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }
    validate(event){
        var Name = this.state.name
        var Surname = this.state.surname
        var Pw = this.state.password
        var Cpw = this.state.cpassword
        if(Name.length == 0 || Surname.length == 0 || Pw.length== 0 || Cpw.length == 0){
            this.setState({msg:"Please enter your informations!"})
        }else{
            if(Pw != Cpw){
                this.setState({msg:"Your password not matching!"})
            }else{
                this.setState({msg:"Your informations submitted!"})
            }


        }
        event.preventDefault()

    }
    render(){
        return(
           <div>
            <form onSubmit={this.validate}>
                <table>
                    
                <tr>  <td>
                <label>Name<input type="text" name="name" value ={this.state.name} onChange={this.handleChange}/> </label></td></tr>
                <tr><td> <label>SurName<input type="text" name="surname" value ={this.state.surname} onChange={this.handleChange}/> </label></td></tr>
                <tr><td><label>Password<input type="password" name="password" value ={this.state.password} onChange={this.handleChange}/> </label></td></tr>
                <tr><td><label>Confirm Password<input type="password" name="cpassword" value ={this.state.cpassword} onChange={this.handleChange}/> </label></td></tr>
                <tr><td><input type="submit" value="submit"/></td></tr> </table>
                

            </form>
            <div> {this.state.msg}   </div>
            </div>
        )
    }
}
export default Form;