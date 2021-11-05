import React from 'react'
import './style.css'
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			firstName: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		console.log(event)
		this.setState({ firstName: event.target.value })
	}
	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="First Name"
					onChange={this.handleChange}
				/>
				<h2>{this.state.firstName}</h2>
			</div>
		)
	}
}
export default App
