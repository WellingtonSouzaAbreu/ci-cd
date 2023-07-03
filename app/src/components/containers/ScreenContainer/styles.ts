import { ViewStyle } from 'react-native'

import styled from 'styled-components/native'

interface ContainerProps {
	justifyContent: ViewStyle['justifyContent']
	alignItems: ViewStyle['alignItems']
	padding: number
}

export const Container = styled.View<ContainerProps>`
    flex: 1;
	background-color: ${({ theme }) => theme.white1};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    padding: ${({ padding }) => padding || 0}px;
`
