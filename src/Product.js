import React from 'react'

function Product(props) {
	props = Object.entries(props)
	console.log(props)
	const moreProps = props.map((value, index) => (
		<div>
			<h6>
				{value[0]}: {value[1]}
			</h6>
			<br />
		</div>
	))
	console.log(moreProps)

	return (
		<div>
			{moreProps}
			<hr />
		</div>
	)
}

export default Product
