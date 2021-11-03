import React, { Component } from 'react'
import Conditional from './Conditional'

class App extends Component {
	constructor() {
		super()
		this.state = {
			finishedLoading: false,
			data: ''
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				finishedLoading: true,
				data: 'This is data returned from fake API'
			})
		}, 1500),
			setTimeout(() => {
				this.setState({
					data: 'This is different data returned from fake API'
				})
			}, 3000)
	}

	render() {
		return (
			<div>
				{this.state.finishedLoading && (
					<Conditional
						finishedLoading={this.state.finishedLoading}
						data={this.state.data}
					/>
				)}
			</div>
		)
	}
}

export default App
