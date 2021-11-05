import React from 'react'
import './style.css'
class App extends React.Component {
	constructor() {
		super()
		this.state = { character: {} }
	}
	componentDidMount() {
		fetch('https://swapi.dev/api/people/1/')
			.then((response) => response.json())
			.then((data) => {
				this.setState(() => {
					return { data: data }
				})
			})
	}

	render() {
		return <div>Waiting...</div>
	}
}
export default App
