import React from 'react'
import { ViewStyle } from 'react-native'

import { Container } from './styles'

interface ScreenContainerProps {
	children: React.ReactElement | React.ReactElement[]
	justifyContent?: ViewStyle['justifyContent']
	alignItems?: ViewStyle['alignItems']
}

function ScreenContainer({ ...props }: ScreenContainerProps) {
	return (
		<Container
			justifyContent={props.justifyContent}
			alignItems={props.alignItems}
		>
			{props.children}
		</Container>
	)
}

ScreenContainer.defaultProps = {
	justifyContent: 'center',
	alignItems: 'center',
} as Partial<ScreenContainerProps>

export { ScreenContainer }
