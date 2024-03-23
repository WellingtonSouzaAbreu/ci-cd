import React from 'react'
import { SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

import { relativeScreenDensity } from '@utils/screenDimensions'

import { ButtonIconContainer, ButtonLabel, Container } from './styles'

interface PrimaryButtonProps {
	buttonColor?: string
	filled?: boolean
	label?: string
	labelColor?: string
	customHeight?: number
	relativeWidth?: string
	RightSvgIcon?: React.FC<SvgProps>
	onPress: () => void
}

function PrimaryButton({ RightSvgIcon, ...props }: PrimaryButtonProps) {
	const theme = useTheme()

	return (
		<Container
			activeOpacity={0.7}
			buttonColor={props.buttonColor || theme.green4}
			filled={props.filled}
			customHeight={props.customHeight}
			relativeWidth={props.relativeWidth}
			onPress={props.onPress}
		>
			<ButtonLabel
				labelColor={props.labelColor}
				filled={props.filled}
			>
				{props.label}
			</ButtonLabel>
			{
				RightSvgIcon && (
					<ButtonIconContainer>
						<RightSvgIcon width={relativeScreenDensity(15)} height={relativeScreenDensity(15)} />
					</ButtonIconContainer>
				)
			}
		</Container>
	)
}

PrimaryButton.defaultProps = {
	buttonColor: '',
	filled: true,
	label: 'button',
	labelColor: '',
	customHeight: 0,
	relativeWidth: '100%',
	RightSvgIcon: null
}

export { PrimaryButton }
