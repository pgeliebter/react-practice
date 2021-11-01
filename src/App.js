import React, { Component } from 'react'
import './style.css'

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class App extends Component {
	constructor() {
		super()
		this.state = { isLoggedIn: false }
	}
	render() {
		return (
			<div>
				<h1>
					You are currently logged{' '}
					{this.state.isLoggedIn ? ' in' : ' out'}
				</h1>
				<button
					onClick={() => {
						console.log(this.state.isLoggedIn)
						this.setState({ isLoggedIn: !this.state.isLoggedIn })
					}}
				>
					{this.state.isLoggedIn ? 'logged in' : 'logged out'}
				</button>
			</div>
		)
	}
}

export default App
