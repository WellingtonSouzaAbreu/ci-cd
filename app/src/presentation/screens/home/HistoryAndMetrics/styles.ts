import styled from 'styled-components/native'

import { appFonts } from '@presentation/common/fonts'
import { relativeScreenDensity } from '@presentation/utils/screenDimensions'

export const Header = styled.View`
	height: 27%;
	width: 100%;
	background-color: ${({ theme }) => theme.green5};
	padding: ${relativeScreenDensity(15)}px;
	align-items: center;
	justify-content: space-around;
`

export const Title = styled.Text`
	color: ${({ theme }) => theme.white1};
	font-size: ${appFonts.size.medium2};
`

export const Body = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.white1});
`
