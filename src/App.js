import React from 'react'
import './style.css'
import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends React.Component {
	constructor() {
		super()
		this.state = { todos: todosData }
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(id) {
		this.setState((prevState) => {
			const updatedTodos = prevState.todos.map((ele) => {
				if (ele.id === id) {
					return {
						...ele,
						completed: !ele.completed
					}
				}
				return ele
			})
			return { todos: updatedTodos }
		})
	}
	render() {
		const todoItems = this.state.todos.map((ele) => {
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
