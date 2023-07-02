import React from 'react'

import { Container } from './styles'

interface ScreenContainerProps {
	children: React.ReactElement | React.ReactElement[]
}

function ScreenContainer({ ...props }: ScreenContainerProps) {
	return (
		<Container>
			{props.children}
		</Container>
	)
}

export { ScreenContainer }
