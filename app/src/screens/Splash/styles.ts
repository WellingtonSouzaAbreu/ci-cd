import styled from 'styled-components/native'

import { relativeScreenHeight } from '@utils/screenDimensions'

export const Credits = styled.Text`
	position: absolute;
	bottom: ${relativeScreenHeight(10)}px;
	color: #2D9964;
`
