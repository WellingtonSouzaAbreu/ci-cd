import styled from 'styled-components/native'

import { appFonts } from '@presentation/common/fonts'
import { relativeScreenDensity } from '@presentation/utils/screenDimensions'

export const Content = styled.View`
	flex: 1;
	justify-content: space-between;
	padding: ${relativeScreenDensity(30)}px;
`

export const CarouselContext = styled.View`
	width: 100%;
	align-items: center;
	justify-content: space-between;
`

export const CarouselItemText = styled.Text`
	text-align: center;
	font-family: ${appFonts.Inter400Regular};
	color: ${({ theme }) => theme.green5};
	font-size: ${appFonts.size.small2};
`
