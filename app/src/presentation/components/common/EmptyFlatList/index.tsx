import React from 'react'

import { Container, Text } from './styles'

interface EmptyFlatListProps {
	text?: string
}

function EmptyFlatList({ text }: EmptyFlatListProps) {
	return (
		<Container>
			<Text>{text}</Text>
		</Container>
	)
}

EmptyFlatList.defaultProps = { text: 'Lista vazia!', }

export { EmptyFlatList }
