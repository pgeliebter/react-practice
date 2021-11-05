import React from 'react'
import './style.css'
class App extends React.Component {
	constructor() {
		super()
		this.state = { character: {}, loading: false }
	}
	componentDidMount() {
		this.setState(() => {
			return { lodaing: true }
		})
		fetch('https://swapi.dev/api/people/1/')
			.then((response) => response.json())
			.then((data) => {
				this.setState(() => {
					return { character: data, loading: false }
				})
			})
	}

	render() {
		const text = this.state.loading
			? 'Loading..'
			: this.state.character.name
		return <div>{text}</div>
	}
}
export default App
