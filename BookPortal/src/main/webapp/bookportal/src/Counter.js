import React from 'react';
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 0 }
    }


    componentDidMount() {
        this.setState({ value: this.state.value + 1 }) //setState asenkron çalışır. O yüzden hepsi 0'ı arttırmaya çalışır.
        this.setState({ value: this.state.value + 1 })
        this.setState({ value: this.state.value + 1 })
        this.setState({ value: this.state.value + 1 })
        setTimeout(function(){this.setState({value:this.state.value+1})},1000);
    }
    render() {
        return <div>Value:{this.state.value}</div>
    }
}
export default Counter;