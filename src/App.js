import React from 'react'
import './style.css'

function handleClick() {
	console.log('I was clicked')
}

function App() {
	return (
		<div>
			<img
				onMouseOver={() => console.log('hovering!')}
				src="https://www.fillmurray.com/200/100"
			/>
			<br />
			<br />
			<button onClick={handleClick}>Click me</button>
		</div>
	)
}

export default App
