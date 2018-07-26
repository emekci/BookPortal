import React from 'react';
//import Button from './Button';
class App1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeArray: [0, 0, 0], details: "details" }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(id, details) {
        var arr = [0, 0, 0]
        arr[id] = 1
        this.setState({ activeArray: arr, details: details })
    }
    render() {
        return (
            <div>
                <Button id={0} active={this.state.activeArray[0]}
                    clickHandler={this.clickHandler} value="bob" />
                <Button id={1} active={this.state.activeArray[1]}
                    clickHandler={this.clickHandler} value="joe" />
                <Button id={2} active={this.state.activeArray[2]}
                    clickHandler={this.clickHandler} value="ahmet" />

                <div> Hello {this.state.details} </div>
            </div>


        )
    }
}
export default App1;