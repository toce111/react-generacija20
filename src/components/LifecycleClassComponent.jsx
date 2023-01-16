import { Component } from "react";


export default class LifecycleClassComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            counter : 8,
            inputValue : 0
        }
    }
    increment = () => {
        // this.state.counter = 20
        this.setState((state) => ({
            counter : state.counter + 10
        }))
    }

    decrement = () => {
        this.setState((state) =>({
            counter : state.counter - 10
        })) 
    }
    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
    }
    handleIncrement = () => {
        this.setState({counter: this.state.counter + parseInt(this.state.inputValue)});
    }
    handleDecrease = () => {
        this.setState({counter: this.state.counter - parseInt(this.state.inputValue)})
    }


    render() {
        return <div>
            <hr />
            Class Component
            <br />
            counter : {this.state.counter}

            <br />
            <button
                onClick={this.increment}
            >Increment</button>
            <button
                onClick={this.decrement}
            >Decreament</button>    
            <br />
            <input 
                type="text"
                placeholder="Enter number"
                value={this.state.inputValue}
                onChange={this.handleChange}
                style={{width: "100px"}}
            />
            <button
                onClick={this.handleIncrement}
            >Increase</button>
            <button
                onClick={this.handleDecrease}
            >Decrease</button>
        </div>
    }
}
