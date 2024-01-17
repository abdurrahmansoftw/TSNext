'use client'
import { Button } from '@mui/material'

const AddToCart = () => {
	return (
		<div>
			<Button onClick={() => console.log('Do something!')} variant='outlined'>
				Add To Cart
			</Button>
		</div>
	)
}

export default AddToCart
