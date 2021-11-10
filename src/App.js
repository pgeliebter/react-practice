/**
 * Create 2 new components - Header and MemeGenerator
 * Header will only display things
 * MemeGenerator will be calling to an API and holding on to data
 * Each should be in their own file of the same name
 */
import React, { Component } from 'react'
import './style.css'
import Header from './Header'
import MemeGenerator from './MemeGenerator'

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<MemeGenerator />
			</div>
		)
	}
}
export default App
