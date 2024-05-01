import React, { useRef } from 'react'

import verticalBars from '@assets/animatios/verticalBars.json'
import LottieView from 'lottie-react-native'

import { AnimationContainer, Container } from './styles'
// buildingColorPassingLight

interface LoaderProps {
	flex?: boolean
	animationScale?: number
}

function Loader({ ...props }: LoaderProps) {
	const animation = useRef<any>(null)

	return (
		<Container flex={props.flex}>
			<AnimationContainer animationScale={props.animationScale}>
				<LottieView
					source={verticalBars}
					ref={animation}
					autoPlay
					loop
					speed={1.5}
				/>
			</AnimationContainer>
		</Container>
	)
}

Loader.defaultProps = {
	flex: false,
	animationScale: 85
}

export { Loader }
