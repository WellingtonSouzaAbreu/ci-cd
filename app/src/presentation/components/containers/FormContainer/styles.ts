import styled from 'styled-components/native'

import { appFonts } from '@presentation/common/fonts'
import { relativeScreenDensity, relativeScreenHeight } from '@presentation/utils/screenDimensions'

export const Container = styled.View`
	flex: 1;
	width: 100%;
	align-items: center;
	background-color: ${({ theme }) => theme.white1};
`

export const Header = styled.View`
	flex: 2;
	width: 100%;
	height: 120px;
	justify-content: center;
	padding: 0px ${relativeScreenDensity(25)}px;
	background-color: ${({ theme }) => theme.green4};
`

export const TitlePipeContainer = styled.View`
	flex-direction: row;
	align-items: center;
`

export const Pipe = styled.View`
	width: ${relativeScreenDensity(8)}px;
	height: 150%;
	margin-right: ${relativeScreenDensity(5)}px;
	background-color: ${({ theme }) => theme.green1};
`

export const Title = styled.Text`
	font-family: ${appFonts.Inter400Regular};
	font-size: ${appFonts.size.medium3};
	color: ${({ theme }) => theme.white1};
`

export const Body = styled.KeyboardAvoidingView`
	width: 100%;
	flex: 4;
	padding: ${relativeScreenHeight(2)}px;
	justify-content: center;
	align-items: center;
`

export const Footer = styled.View`
	padding: ${relativeScreenHeight(2)}px;
	width: 100%;
	align-items: center;
	justify-content: center;
`
