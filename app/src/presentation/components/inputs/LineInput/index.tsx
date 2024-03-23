import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { TextInputProps } from 'react-native'

import { Container, CustomTextInput, ToggleSecretTextIcon } from './styles'
import { relativeScreenDensity } from '@presentation/common/screenDimensions'

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
