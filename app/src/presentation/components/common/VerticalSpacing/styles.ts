import styled from 'styled-components/native'

import { relativeScreenDensity } from '@presentation/utils/screenDimensions'

interface ContainerProps {
	height: number
}

export const Container = styled.View<ContainerProps>`
	height: ${({ height }) => relativeScreenDensity(height)}px;
`
