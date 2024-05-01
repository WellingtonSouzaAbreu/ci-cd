import React from 'react'

import { ButtonLabel, Container } from './styles'

interface SelectButtonProps {
	selected?: boolean
	value?: string
	wrapText?: boolean
	relativeWidth?: string
	onSelect: () => void
	onLongPress?: () => void
}

function SelectButton({ ...props }: SelectButtonProps) {
	return (
		<Container
			activeOpacity={0.7}
			selected={props.selected}
			relativeWidth={props.relativeWidth}
			onPress={props.onSelect}
			onLongPress={props.onLongPress}
		>
			<ButtonLabel selected={props.selected}>
				{props.value}
			</ButtonLabel>
		</Container>
	)
}

SelectButton.defaultProps = {
	selected: true,
	value: 'button',
	wrapText: false,
	relativeWidth: '100%',
	onLongPress: () => console.log('onLongPress')
}

export { SelectButton }
