import React, { Component } from 'react'
import FormComponent from './FormComponent'

class FormContainer extends Component {
	constructor() {
		super()
		this.state = {
			firstName: '',
			lastName: '',
			age: '',
			gender: '',
			dietaryRestrictions: {
				kosher: false,
				halal: false,
				vegan: false
			},
			location: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		const { name, value, checked, type } = event.target
		if (type === 'checkbox') {
			this.setState((prevState) => {
				return {
					dietaryRestrictions: {
						...prevState.dietaryRestrictions,
						[name]: checked
					}
				}
			})
		}
		this.setState({ [name]: value })
	}
	render() {
		const diet = Object.entries(this.state.dietaryRestrictions).map((x) => {
			return x[1] && `${x[0]}, `
		})
		return (
			<FormComponent
				handleChange={this.handleChange}
				{...this.state}
				diet={diet}
			/>
		)
	}
}
export default FormContainer
