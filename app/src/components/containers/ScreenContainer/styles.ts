import { ViewStyle } from 'react-native'

import styled from 'styled-components/native'

interface ContainerProps {
	justifyContent: ViewStyle['justifyContent']
	alignItems: ViewStyle['alignItems']
}

export const Container = styled.View<ContainerProps>`
    flex: 1;
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
`
