import { FontAwesome, Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { TextInputProps } from 'react-native'

import { Container, CustomTextInput, InputIconContainer } from './styles'
import { relativeScreenDensity } from '@presentation/common/screenDimensions'

interface LineInputProps extends TextInputProps {
	value: string
	onChangeText: (text: string) => void
	type?: 'text' | 'password' | 'search'
}

function LineInput({ ...props }: LineInputProps) {
	const [secretTextIsVisible, setSecretTextIsVisible] = useState(props.type === 'password')

	const toggleSecretTextVisibility = () => {
		setSecretTextIsVisible((previousVisibility) => !previousVisibility)
	}

	const clearSearchText = () => {
		props.onChangeText('')
	}

	return (
		<Container>
			{
				props.type === 'search' && (
					<InputIconContainer
						alignLeft
						onPress={toggleSecretTextVisibility}
					>
						<Ionicons
							name={'search-sharp'}
							size={relativeScreenDensity(25)}
							color={'green'}
						/>
					</InputIconContainer>
				)
			}
			<CustomTextInput
				{...props}
				returnKeyType={'done'}
				secureTextEntry={secretTextIsVisible}
			/>
			{
				props.type === 'password' && (
					<InputIconContainer onPress={toggleSecretTextVisibility}>
						<FontAwesome
							name={secretTextIsVisible ? 'eye' : 'eye-slash'}
							size={relativeScreenDensity(25)}
							color={'green'}
						/>
					</InputIconContainer>
				)
			}
			{
				props.type === 'search' && props.value && (
					<InputIconContainer onPress={clearSearchText}>
						<Ionicons
							name={'close-sharp'}
							size={relativeScreenDensity(25)}
							color={'green'}
						/>
					</InputIconContainer>
				)
			}
		</Container>
	)
}

LineInput.defaultProps = { type: 'text' }

export { LineInput }
