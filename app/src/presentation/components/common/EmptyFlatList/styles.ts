import styled from 'styled-components/native'

import { appFonts } from '@presentation/common/fonts'

export const Container = styled.View`
	padding-top: 50%;
	flex: 1;
	align-items: center;
	align-content: center;
`

export const Text = styled.Text`
	font-family: ${appFonts.Inter400Regular};
	color: ${({ theme }) => theme.green1};
	font-size: ${appFonts.size.small3};
	text-align: center;
`
