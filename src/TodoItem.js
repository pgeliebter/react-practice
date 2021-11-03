import React from 'react'

function TodoItem(props) {
	let textStyle = {}
	props.todoItem.completed
		? (textStyle = { textDecoration: 'line-through' })
		: null
	return (
		<div className="todo-item">
			<input
				type="checkbox"
				checked={props.todoItem.completed}
				onChange={() => props.handleChange(props.todoItem.id)}
			/>
			<p style={textStyle}> {props.todoItem.text}</p>
		</div>
	)
}

export default TodoItem
