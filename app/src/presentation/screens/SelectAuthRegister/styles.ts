import { appFonts } from '@presentation/common/fonts'
import styled from 'styled-components/native'

export const CentralizedContainer = styled.View`
	flex: 1;
	width: 100%;
	justify-content: center;
	align-items: center;
`

export const HeaderContainer = styled(CentralizedContainer)`
	flex: 1.2;
`

export const AppName = styled.Text`
	text-align: center;
	font-family: ${appFonts.Inter400Regular};
	font-size: ${appFonts.size.small3};
`

export const BodyContainer = styled(CentralizedContainer)`

`

export const PresentationText = styled.Text`
	text-align: center;
	font-family: ${appFonts.Inter400Regular};
	color: ${({ theme }) => theme.green5};
	font-size: ${appFonts.size.small2};
`

export const FooterContainer = styled(CentralizedContainer)`

`
