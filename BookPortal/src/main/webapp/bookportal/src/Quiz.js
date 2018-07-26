import React from 'react';
import Button from './Button';
class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeArray: [0, 0, 0, 0],}
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(id, details) {
        var numbers = [0, 0, 0, 0]
        numbers[id] = 1
        //this.setState({ activeArray: numbers, details: details })
    }
    generateNumber(props) {
       return Math.floor((Math.random * 10) + 1);
    }
    componentDidMount(){
        var firstNumber = this.generateNumber
        var secondNumber = this.generateNumber
    }
    render() {
        return (
            <div>
                <div>
                   

                </div>
                <Button id={0} active={this.state.activeArray[0]}
                    clickHandler={this.clickHandler} value="t" />
                <Button id={1} active={this.state.activeArray[1]}
                    clickHandler={this.clickHandler} value="z" />
                <Button id={2} active={this.state.activeArray[2]}
                    clickHandler={this.clickHandler} value="y" />
                <Button id={3} active={this.state.activeArray[2]}
                    clickHandler={this.clickHandler} value="x" />


            </div>

        )
    }
}

export default Quiz;