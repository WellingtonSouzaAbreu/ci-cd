import React, { useState } from 'react'
import { TextInputProps } from 'react-native'

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
			{props.secretText && <ToggleSecretTextIcon onPress={toggleSecretTextVisibility} />}
		</Container>
	)
}

LineInput.defaultProps = { secretText: false }

export { LineInput }
