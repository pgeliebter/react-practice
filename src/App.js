import React from 'react'
import './style.css'
import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends React.Component {
	constructor() {
		super()
		this.state = { todosDataState: todosData }
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(id) {
		console.log('handled change function ran ')
		this.setState({
			todosDataState: todosData.map((ele) => {
				if (ele.id === id) {
					ele.completed = !ele.completed
				}
				return ele
			})
		})
	}
	render() {
		const todoItems = this.state.todosDataState.map((ele) => {
			return (
				<TodoItem
					todoItem={ele}
					key={ele.id}
					handleChange={this.handleChange}
				/>
			)
		})
		return <div className="todo-list">{todoItems}</div>
	}
}
export default App
