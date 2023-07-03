import React from 'react'
import { ViewStyle } from 'react-native'

import { relativeScreenWidth } from '@utils/screenDimensions'

import { Container } from './styles'

interface ScreenContainerProps {
	children: React.ReactElement | React.ReactElement[]
	justifyContent?: ViewStyle['justifyContent']
	alignItems?: ViewStyle['alignItems']
	padding?: number
}

function ScreenContainer({ ...props }: ScreenContainerProps) {
	return (
		<Container
			justifyContent={props.justifyContent}
			alignItems={props.alignItems}
			padding={props.padding}
		>
			{props.children}
		</Container>
	)
}

ScreenContainer.defaultProps = {
	justifyContent: 'center',
	alignItems: 'center',
	padding: relativeScreenWidth(5)
} as Partial<ScreenContainerProps>

export { ScreenContainer }
