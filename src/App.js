import React from 'react'
import './style.css'
import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends React.Component {
	constructor() {
		super()
		this.state = { todosDataState: todosData }
	}
	render() {
		const cee = this.state.todosDataState.map((ele) => {
			return <TodoItem todoItem={ele} key={ele.id} />
		})
		return <div className="todo-list">{cee}</div>
	}
}
export default App
