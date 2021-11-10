import './style.css'
import React, { Component } from 'react'

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
	constructor() {
		super()
		this.state = {
			firstName: '',
			lastName: '',
			age: '',
			gender: '',
			dietaryRestrictions: '',
			location: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		const { name, value, id, type } = event.target
		this.setState({ [name]: value })
	}
	render() {
		return (
			<main>
				<form>
					<input
						placeholder="First Name"
						name="firstName"
						onChange={this.handleChange}
					/>
					<br />
					<input
						placeholder="Last Name"
						name="lastName"
						onChange={this.handleChange}
					/>
					<br />
					<input
						placeholder="Age"
						name="age"
						onChange={this.handleChange}
					/>
					<br />
					<label>
						<input
							type="radio"
							value="Male"
							name="gender"
							onChange={this.handleChange}
						/>
						Male
					</label>
					<label>
						<input
							type="radio"
							value="Female"
							name="gender"
							onChange={this.handleChange}
						/>
						Female
					</label>
					<br />
					<select
						onChange={this.handleChange}
						value={this.state.location}
						name="location"
					>
						<option value="NY">NY</option>
						<option value="NJ">NJ</option>
						<option value="CT">CT</option>
					</select>
					<br />
					<label>
						<input
							type="checkbox"
							value="kosher"
							name="dietaryRestriction"
						/>
						Kosher
					</label>
					<br />
					<label>
						<input
							type="checkbox"
							value="halal"
							name="dietaryRestriction"
						/>
						Halal
					</label>
					<br />
					<label>
						<input
							type="checkbox"
							value="vegan"
							name="dietaryRestriction"
						/>
						Vegan
					</label>
					{/* Create check boxes for dietary restrictions here */}
					<br />
					<button>Submit</button>
				</form>
				<hr />
				<h2>Entered information:</h2>
				<p>
					Your name:
					{`${this.state.firstName} ${this.state.lastName}`}
				</p>
				<p>Your age: {this.state.age}</p>
				<p>Your gender: {this.state.gender}</p>
				<p>Your destination: {this.state.location}</p>
				<p>
					Your dietary restrictions:
					{this.state.dietaryRestrictions}
				</p>
			</main>
		)
	}
}

export default App
