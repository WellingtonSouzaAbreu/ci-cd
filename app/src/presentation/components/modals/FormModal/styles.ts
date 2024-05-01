import styled from 'styled-components/native'

import { appFonts } from '@presentation/common/fonts'

import { relativeScreenDensity } from '@presentation/common/screenDimensions'

export const Container = styled.View`
    height: 100%;
    background-color: rgba(0,0,0,0.3);
	justify-content: center;
	align-items: center;
`

export const TouchCloseArea = styled.TouchableOpacity`
    flex: 1;
    width: 100%;
`

export const Content = styled.View`
    width: 88%;
    background-color: black;
    border-radius: ${relativeScreenDensity(15)}px;
    justify-content: space-between;
 `

export const ContentInner = styled.View`
	width: 100%;
	background-color: white;
	padding: ${relativeScreenDensity(25)}px;
	border-radius: ${relativeScreenDensity(10)}px;
	justify-content: space-between;
	align-items: center;
`

export const Title = styled.Text`
	text-align: center;
	color: ${({ theme }) => theme.green2};
	font-family: ${appFonts.Inter400Regular};
	font-size: ${appFonts.size.small3};
	padding-bottom: ${relativeScreenDensity(30)}px;
`

export const InputContainer = styled.View`
	width: 100%;
	padding: ${relativeScreenDensity(0)}px ${relativeScreenDensity(10)}px ${relativeScreenDensity(5)}px ${relativeScreenDensity(10)}px;
`
