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
		console.log(event.target)
		this.setState({ [event.target.name]: event.target.value })
	}
	render() {
		return (
			<div>
				<form>
					<input
						type="text"
						name="firstName"
						placeholder="First Name"
						onChange={this.handleChange}
					/>
					<br />
					<input
						type="text"
						name="lastName"
						placeholder="Last Name"
						onChange={this.handleChange}
					/>
					<h2>first name: {this.state.firstName}</h2>
					<h2>last name: {this.state.lastName}</h2>
				</form>
			</div>
		)
	}
}
export default App
