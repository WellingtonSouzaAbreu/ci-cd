import styled from 'styled-components/native'

import { relativeScreenDensity } from '@presentation/utils/screenDimensions'

interface CarouselIndicatorContainerProps {
	width?: number
}

export const CarouselIndicatorContainer = styled.View<CarouselIndicatorContainerProps>`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width}px;
`

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`

export const CarouselActiveIndicatorItem = styled.View`
    height: ${relativeScreenDensity(5)}px;
    width: ${relativeScreenDensity(25)}px;
    border-radius: ${relativeScreenDensity(7)}px;
	background-color: ${({ theme }) => theme.green5};
    margin-horizontal: 2px;
`

export const CarouselInactiveIndicatorItem = styled.View` /* TODO BUG não importa theme com autocomplete*/
	height: ${relativeScreenDensity(5)}px;
	width: ${relativeScreenDensity(15)}px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.gray2};
	margin-horizontal: 2px;
`
