import styled from 'styled-components/native'

import { appFonts } from '@presentation/common/fonts'

import { relativeScreenDensity } from '@presentation/common/screenDimensions'

export const Container = styled.ScrollView`
	flex: 1;
	width: 100%;
	border: 1px solid ${({ theme }) => theme.green1};
	border-radius: ${relativeScreenDensity(10)}px;
	padding: ${relativeScreenDensity(10)}px;
`

export const SummaryLine = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const SummaryText = styled.Text`
	text-align: center;
	padding: ${relativeScreenDensity(5)}px;
	font-family: ${appFonts.Inter400Regular};
	color: ${({ theme }) => theme.green2};
	font-size: ${appFonts.size.medium1};
`

export const Date = styled(SummaryText)`

`

export const Separator = styled.View`
	flex: 1;
	background-color: green;
	padding: ${relativeScreenDensity(1)}px ${relativeScreenDensity(10)}px;
`

export const Amount = styled(SummaryText)`

`
