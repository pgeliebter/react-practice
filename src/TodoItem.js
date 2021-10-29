import React from 'react'

function TodoItem(props) {
	return (
		<div className="todo-item">
			<input type="checkbox" defaultChecked={props.todoItem.completed} />
			<p> {props.todoItem.text}</p>
		</div>
	)
}

export default TodoItem
