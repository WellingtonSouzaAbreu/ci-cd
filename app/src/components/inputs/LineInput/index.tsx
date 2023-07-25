import React from 'react'
import { TextInputProps } from 'react-native'

import { Container, CustomTextInput } from './styles'

function LineInput({ ...props }: TextInputProps) {
	return (
		<Container>
			<CustomTextInput {...props} />
		</Container>
	)
}

export { LineInput }
