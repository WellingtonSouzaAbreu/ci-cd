import styled from 'styled-components/native'

import { relativeScreenHeight } from '@presentation/common/screenDimensions'

export const Credits = styled.Text`
	position: absolute;
	bottom: ${relativeScreenHeight(10)}px;
	color: ${({ theme }) => theme.green1};
`

export const NativeLoader = styled.ActivityIndicator`
	position: absolute;
	bottom: ${relativeScreenHeight(15)}px;
`
