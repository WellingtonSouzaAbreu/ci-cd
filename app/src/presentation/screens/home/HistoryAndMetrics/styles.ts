import styled from 'styled-components/native'

import { appFonts } from '@presentation/common/fonts'
import { relativeScreenDensity, relativeScreenWidth } from '@presentation/common/screenDimensions'

export const Header = styled.View`
	height: 25%;
	width: 100%;
	background-color: ${({ theme }) => theme.green5};
	align-items: center;
	justify-content: space-around;
`

export const HorizontalHeaderScroll = styled.ScrollView`
	width: 100%;
`

export const SelectPeriodButtonContainer = styled.View`
	align-items: center;
	justify-content: center;
	width: ${relativeScreenWidth(100)}px;
`

export const Title = styled.Text`
	color: ${({ theme }) => theme.white1};
	font-size: ${appFonts.size.medium2};
	padding: 3%;
`

export const ButtonPadding = styled.View`
	width: 100%;
	align-items: center;
	justify-content: space-around;
	padding: ${relativeScreenDensity(15)}px;
`

export const Body = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.white1};
`
