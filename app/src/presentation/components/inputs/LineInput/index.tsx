import React, { useState } from 'react'
import { TextInputProps } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import { relativeScreenDensity } from '@presentation/utils/screenDimensions'

import { Container, CustomTextInput, ToggleSecretTextIcon } from './styles'

interface LineInputProps extends TextInputProps {
	secretText?: boolean
}

function LineInput({ ...props }: LineInputProps) {
	const [secretTextIsVisible, setSecretTextIsVisible] = useState(props.secretText)

	const toggleSecretTextVisibility = () => {
		setSecretTextIsVisible((previousVisibility) => !previousVisibility)
	}

	return (
		<Container>
			<CustomTextInput
				{...props}
				secureTextEntry={secretTextIsVisible}
			/>
			{
				props.secretText && (
					<ToggleSecretTextIcon onPress={toggleSecretTextVisibility}>
						<FontAwesome
							name={secretTextIsVisible ? 'eye' : 'eye-slash'}
							size={relativeScreenDensity(25)}
							color={'green'}
						/>
					</ToggleSecretTextIcon>
				)
			}
		</Container>
	)
}

LineInput.defaultProps = { secretText: false }

export { LineInput }
