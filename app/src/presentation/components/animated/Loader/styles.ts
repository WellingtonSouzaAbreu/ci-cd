import styled from 'styled-components/native'

import { relativeScreenDensity } from '@presentation/common/screenDimensions'

interface ContainerProps {
    flex?: boolean
}

interface AnimationContainerProps {
    animationScale?: number
}

export const Container = styled.View<ContainerProps>`
	flex: ${({ flex }) => (flex ? 1 : 0)};
    align-items: center;
    justify-content: center;
`

export const AnimationContainer = styled.View<AnimationContainerProps>`
    width: ${({ animationScale }) => relativeScreenDensity(animationScale)}px;
    height: ${({ animationScale }) => relativeScreenDensity(animationScale)}px;
`
