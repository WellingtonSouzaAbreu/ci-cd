import React from 'react'
import { StatusBar, ViewStyle } from 'react-native'

import { useTheme } from 'styled-components'

import { relativeScreenDensity } from '@utils/screenDimensions'

import { Container, SafeAreaViewContainer } from './styles'

interface ScreenContainerProps {
	children: React.ReactElement | React.ReactElement[]
	topSafeAreaColor?: string
	bottomSafeAreaColor?: string
	justifyContent?: ViewStyle['justifyContent']
	alignItems?: ViewStyle['alignItems']
	padding?: number
}

function ScreenContainer({ ...props }: ScreenContainerProps) {
	const theme = useTheme()

	return (
		<>
			<SafeAreaViewContainer safeAreaColor={props.topSafeAreaColor} withoutFlex />
			<SafeAreaViewContainer safeAreaColor={props.bottomSafeAreaColor}>
				<StatusBar backgroundColor={props.topSafeAreaColor || theme.white1} />
				<Container
					justifyContent={props.justifyContent}
					alignItems={props.alignItems}
					padding={props.padding}
				>
					{props.children}
				</Container>
			</SafeAreaViewContainer>
		</>
	)
}

ScreenContainer.defaultProps = {
	safeAreaColor: '',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: relativeScreenDensity(15)
} as Partial<ScreenContainerProps>

export { ScreenContainer }
