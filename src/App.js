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
				src="https://www.fillmurray.com/1000/1000"
			/>
			<br />
			<br />
			<button onClick={handleClick}>Click me</button>
			<div onCopy={() => console.log('copying')}>boo</div>
		</div>
	)
}

export default App
