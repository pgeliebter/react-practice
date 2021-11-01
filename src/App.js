import React from 'react'
import './style.css'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			count: 0,
			inputValue: 0
		}
		this.handleClickAdd = this.handleClickAdd.bind(this)
		this.handleClickDivide = this.handleClickDivide.bind(this)
		this.handleClickMultiply = this.handleClickMultiply.bind(this)
	}
	handleClickAdd() {
		this.setState((prevState) => {
			return { count: prevState.count + this.state.inputValue }
		})
	}
	updateInputValue(evt) {
		this.setState({
			inputValue: evt.target.value
		})
	}
	handleClickDivide() {
		this.setState((prevState) => {
			return {
				count: prevState.count / this.state.inputValue
			}
		})
	}
	handleClickMultiply() {
		this.setState((prevState) => {
			return { count: prevState.count * this.state.inputValue }
		})
	}

	render() {
		return (
			<div>
				<h1>
					{this.state.inputValue} &gt; {this.state.count}
				</h1>
				<h1 />
				<input
					value={this.state.inputValue}
					onChange={(evt) => this.updateInputValue(evt)}
				/>
				<button onClick={this.handleClickAdd}>Add!</button>
				<button onClick={this.handleClickDivide}>Divide </button>
				<button onClick={this.handleClickMultiply}>multiply!</button>
			</div>
		)
	}
}

export default App
