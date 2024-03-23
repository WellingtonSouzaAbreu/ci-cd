import styled from 'styled-components/native'

import { appFonts } from '@presentation/common/fonts'
import { relativeScreenHeight } from '@presentation/common/screenDimensions'

interface ContainerProps {
	buttonColor?: string
	filled?: boolean
	customHeight?: number
	relativeWidth?: string
}

interface ButtonLabelProps {
	labelColor?: string
	filled?: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
	width: ${({ relativeWidth }) => relativeWidth};
	height: ${({ customHeight }) => customHeight || relativeScreenHeight(9)}px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: ${100}px;
	border: 3px solid ${({ buttonColor }) => buttonColor};
	background-color: ${({ buttonColor, filled, theme }) => (filled ? buttonColor : theme.white1)};
`

export const ButtonLabel = styled.Text<ButtonLabelProps>`
	font-family: ${appFonts.Inter400Regular};
	color: ${({ labelColor, filled, theme }) => (filled ? labelColor || theme.white1 : labelColor || theme.green5)};
	font-size: ${appFonts.size.small3};
`

export const ButtonIconContainer = styled.View`
	position: absolute;
	right: 7%;
	height: 100%;
	align-items: center;
	justify-content: center;
`
