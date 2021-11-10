import React, { Component } from 'react'

function FormComponent(props) {
	return (
		<main>
			<form>
				<input
					placeholder="First Name"
					name="firstName"
					onChange={props.handleChange}
				/>
				<br />
				<input
					placeholder="Last Name"
					name="lastName"
					onChange={props.handleChange}
				/>
				<br />
				<input
					placeholder="Age"
					name="age"
					onChange={props.handleChange}
				/>
				<br />
				<label>
					<input
						type="radio"
						value="Male"
						name="gender"
						onChange={props.handleChange}
					/>
					Male
				</label>
				<label>
					<input
						type="radio"
						value="Female"
						name="gender"
						onChange={props.handleChange}
					/>
					Female
				</label>
				<br />
				<select
					onChange={props.handleChange}
					value={props.location}
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
						name="kosher"
						onChange={props.handleChange}
						checked={props.dietaryRestrictions.kosher}
					/>
					Kosher
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="halal"
						onChange={props.handleChange}
						checked={props.dietaryRestrictions.halal}
					/>
					Halal
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="vegan"
						onChange={props.handleChange}
						checked={props.dietaryRestrictions.vegan}
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
				{`${props.firstName} ${props.lastName}`}
			</p>
			<p>Your age: {props.age}</p>
			<p>Your gender: {props.gender}</p>
			<p>Your destination: {props.location}</p>
			<p>
				Your dietary restrictions:
				{props.diet}
			</p>
		</main>
	)
}
export default FormComponent
