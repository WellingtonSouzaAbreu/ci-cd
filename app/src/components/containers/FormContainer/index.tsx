import React, { ReactElement } from 'react'
import { Alert, Platform, StatusBar } from 'react-native'

import { useTheme } from 'styled-components'

import { PrimaryButton } from '@components/buttons/PrimaryButton'

import {
	Body, Container, Footer, Header, Pipe, Title, TitlePipeContainer
} from './styles'

interface FormContainerProps {
	title?: string
	buttonLabel?: string
	errorMessage?: string
	children: ReactElement | ReactElement[]
	validateField: () => boolean
	onSubmit: () => void
}

function FormContainer({ ...props }: FormContainerProps) {
	const theme = useTheme()

	const throwError = () => {
		Alert.alert('Ops!', props.errorMessage)
	}

	const performSubmit = () => {
		if (props.validateField()) {
			return props.onSubmit()
		}
		return throwError()
	}

	return (
		<Container>
			<StatusBar backgroundColor={theme.green4} />
			<Header>
				<TitlePipeContainer>
					<Pipe />
					<Title>
						{props.title}
					</Title>
				</TitlePipeContainer>
			</Header>
			<Body behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
				{props.children}
			</Body>
			<Footer>
				<PrimaryButton
					label={props.buttonLabel}
					onPress={performSubmit}
				/>
			</Footer>
		</Container>
	)
}

FormContainer.defaultProps = {
	title: 'title',
	buttonLabel: 'Continuar',
	errorMessage: 'Algo deu errado!'
}

export { FormContainer }
