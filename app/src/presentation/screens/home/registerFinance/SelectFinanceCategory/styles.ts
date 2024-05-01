import styled from 'styled-components/native'

import { appFonts } from '@presentation/common/fonts'

import { relativeScreenDensity } from '@presentation/common/screenDimensions'

export const FinanceCategoryFlatList = styled.FlatList`
	width: 100%;
`

export const FlatListContainer = styled.View`
	flex: 1;
	width: 70%;
	align-self: center;
	align-items: center;
	justify-content: center;
`

export const AddNewCategoryContainer = styled.TouchableOpacity`
	padding-top: ${relativeScreenDensity(10)}px;
`

export const AddNewCategoryLabel = styled.Text`
	font-family: ${appFonts.Inter400Regular};
	color: ${({ theme }) => theme.green1};
	font-size: ${appFonts.size.small2};
	text-decoration-line: underline;
`
