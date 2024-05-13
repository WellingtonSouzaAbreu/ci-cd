import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'

// import verticalBars from '@assets/animatios/verticalBars.json'
// import LottieView from 'lottie-react-native'

import { AnimationContainer, Container } from './styles'
// buildingColorPassingLight

interface LoaderProps {
	flex?: boolean
	animationScale?: number
}

function Loader({ ...props }: LoaderProps) {
	// const animation = useRef<any>(null)

	const theme = useTheme()

	return (
		<Container flex={props.flex}>
			<AnimationContainer animationScale={props.animationScale}>
				{/* <LottieView
					source={verticalBars}
					ref={animation}
					autoPlay
					loop
					speed={1.5}
				/> */}
				<ActivityIndicator size={'large'} color={theme.white1} />
			</AnimationContainer>
		</Container>
	)
}

Loader.defaultProps = {
	flex: false,
	animationScale: 85
}

export { Loader }
