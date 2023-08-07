import styled from 'styled-components/native'

interface ContainerProps {
	height: number
}

export const Container = styled.View<ContainerProps>`
	height: ${({ height }) => height}px;
`
