import styled from 'styled-components/native'

import { appFonts } from '@presentation/common/fonts'

import { relativeScreenDensity } from '@presentation/common/screenDimensions'

export const SummaryHeader = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: ${relativeScreenDensity(15)}px;
`

export const ReminderText = styled.Text`
	flex: 1;
	text-align: left;
	font-family: ${appFonts.Inter400Regular};
	color: ${({ theme }) => theme.green5};
	font-size: ${appFonts.size.small3};
`

export const FinanceCategoryCard = styled.View`
	align-items: center;
	justify-content: center;
	padding: ${relativeScreenDensity(6)}px;
	border: 1px solid ${({ theme }) => theme.green1};
	border-radius: ${relativeScreenDensity(10)}px;
	margin-left: ${relativeScreenDensity(15)}px;
`

export const FinanceCategory = styled.Text`
	text-align: center;
	font-family: ${appFonts.Inter400Regular};
	color: ${({ theme }) => theme.green1};
	font-size: ${appFonts.size.small1};
`
