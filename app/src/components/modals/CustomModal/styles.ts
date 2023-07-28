import styled from 'styled-components/native'

import { relativeScreenDensity } from '@utils/screenDimensions'

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
	padding-top: ${relativeScreenDensity(15)}px;
	border-radius: ${relativeScreenDensity(10)}px;
	justify-content: space-between;
`
