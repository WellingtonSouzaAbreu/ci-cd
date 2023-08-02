import { appFonts } from '@common/fonts'
import styled from 'styled-components/native'

import { relativeScreenDensity, relativeScreenHeight } from '@utils/screenDimensions'

export const Container = styled.View`
	width: 100%;
	overflow: hidden;
	border-radius: ${relativeScreenDensity(3)}px;
	border-bottom-width: ${relativeScreenDensity(3)}px;
	border-bottom-color: ${({ theme }) => theme.green5}
`

export const CustomTextInput = styled.TextInput`
	width: 100%;
	height: ${relativeScreenHeight(6)}px;
	padding-vertical: ${relativeScreenDensity(8)}px;
	padding-horizontal: ${relativeScreenDensity(16)}px;
	font-family: ${appFonts.Inter400Regular};
	font-size: ${appFonts.size.medium1};
	color: ${({ theme }) => theme.black1};
`

export const ToggleSecretTextIcon = styled.TouchableOpacity`
	position: absolute;
	right: ${relativeScreenDensity(10)}px;
	top: ${relativeScreenDensity(7)}px;
	height: ${relativeScreenDensity(30)}px;
	width: ${relativeScreenDensity(30)}px;
	align-items: center;
	justify-content: center;
`
