import React from 'react'
import './style.css'
import TodoItem from './TodoItem'
import todosData from './todosData'

const cee = todosData.map((ele) => {
	return <TodoItem todoItem={ele} key={ele.id} />
})
function App() {
	return <div className="todo-list">{cee}</div>
}
export default App
