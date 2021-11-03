import React from 'react'
import './style.css'

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends React.Component {
	constructor() {
		super()
		this.state = { loggedIn: false }
		this.login = this.login.bind(this)
	}
	login() {
		this.setState((prevState) => {
			return { loggedIn: !prevState.loggedIn }
		})
	}
	render() {
		return (
			<div>
				<div>
					{this.state.loggedIn ? (
						'user is Logged in'
					) : (
						'user is not logged in'
					)}
				</div>
				<button onClick={this.login}>
					Log {!this.state.loggedIn ? 'In' : 'Out'}
				</button>
			</div>
		)
	}
}

export default App
