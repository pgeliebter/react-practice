import React from 'react'
import './style.css'
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			firstName: '',
			lastName: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		const { name, value, placeholder } = event.target
		console.log(name, value, placeholder)
		this.setState({ [name]: value })
	}
	render() {
		return (
			<div>
				<form>
					<input
						type="text"
						value={this.state.firstName}
						name="firstName"
						placeholder="First Name"
						onChange={this.handleChange}
					/>
					<br />
					<input
						type="text"
						value={this.state.lastName}
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
