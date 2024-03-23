import styled from 'styled-components/native'

import { appFonts } from '@presentation/common/fonts'

import { relativeScreenHeight } from '@presentation/common/screenDimensions'

interface ContainerProps {
	selected?: boolean
	relativeWidth?: string
}

interface ButtonLabelProps {
	selected?: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
	width: ${({ relativeWidth }) => relativeWidth};
	height: ${relativeScreenHeight(6)}px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: ${100}px;
	border: 3px solid ${({ theme }) => theme.green1};
	background-color: ${({ selected, theme }) => (selected ? theme.green1 : theme.white1)};
`

export const ButtonLabel = styled.Text<ButtonLabelProps>`
	font-family: ${appFonts.Inter400Regular};
	color: ${({ selected, theme }) => (selected ? theme.white1 : theme.green4)};
	font-size: ${appFonts.size.small3};
`
