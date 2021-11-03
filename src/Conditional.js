import React from 'react'

function Conditional(props) {
	return (
		<div>
			{props.finishedLoading && <h2>Hello world</h2>}
			<h4>I am conditionally rendered cause condition is TRUE </h4>
			<h5>Data: {props.data}</h5>
		</div>
	)
}

export default Conditional
