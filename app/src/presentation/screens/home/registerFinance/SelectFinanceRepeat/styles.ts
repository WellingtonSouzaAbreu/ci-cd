import Carousel from 'react-native-reanimated-carousel'
import styled from 'styled-components/native'

import { relativeScreenDensity, relativeScreenWidth } from '@presentation/common/screenDimensions'

export const SelectorContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`

export const CustomCarousel = styled(Carousel)`
	width: ${relativeScreenWidth(100)}px;
	justify-content: center;
	align-items: center;
	height: 100%;
`

interface InstallmentProps {
	active?: boolean
}

export const Installment = styled.Text<InstallmentProps>`
	opacity: ${({ active }) => (active ? 1 : 0.4)};

	text-align: center;
	font-size: ${relativeScreenDensity(50)}px;
	padding: ${relativeScreenDensity(5)}px;
	font-weight: bold;
	color: ${({ theme }) => theme.green2};
`
