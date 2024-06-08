import styled from 'styled-components/native'

import { appFonts } from '@presentation/common/fonts'

import { relativeScreenDensity } from '@presentation/common/screenDimensions'

export const Content = styled.View`
	flex: 1;
	justify-content: space-between;
	width: 100%;
	background-color: ${({ theme }) => theme.green1};
`

export const PictureContainer = styled.View`
	flex: 2;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.green1};
`

export const FooterSection = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.white1};
	padding: ${relativeScreenDensity(20)}px;
	padding-top: ${relativeScreenDensity(30)}px;
	border-top-right-radius: ${relativeScreenDensity(25)}px;
	border-top-left-radius: ${relativeScreenDensity(25)}px;
`

export const TitlePipeContainer = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
`

export const Pipe = styled.View`
	width: ${relativeScreenDensity(8)}px;
	height: 150%;
	margin-right: ${relativeScreenDensity(10)}px;
	background-color: ${({ theme }) => theme.green2};
`

export const Title = styled.Text`
	font-family: ${appFonts.Inter400Regular};
	font-size: ${appFonts.size.large1};
	color: ${({ theme }) => theme.black1};
`

export const RedirectText = styled.Text`
	align-self: flex-end;
	font-family: ${appFonts.Inter400Regular};
	font-size: ${appFonts.size.small2};
	color: ${({ theme }) => theme.green1};
`
