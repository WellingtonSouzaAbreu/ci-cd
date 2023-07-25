import React from 'react'

import { useTheme } from 'styled-components/native'

import { ButtonLabel, Container } from './styles'

interface PrimaryButtonProps {
	buttonColor?: string
	filled?: boolean
	label?: string
	labelColor?: string
	onPress: () => void
}

function PrimaryButton({ ...props }: PrimaryButtonProps) {
	const theme = useTheme()

	return (
		<Container
			activeOpacity={0.7}
			buttonColor={props.buttonColor || theme.green4}
			filled={props.filled}
			onPress={props.onPress}
		>
			<ButtonLabel
				labelColor={props.labelColor}
				filled={props.filled}
			>
				{props.label}
			</ButtonLabel>
		</Container>
	)
}

PrimaryButton.defaultProps = {
	buttonColor: '',
	filled: true,
	label: 'button',
	labelColor: ''
}

export { PrimaryButton }
