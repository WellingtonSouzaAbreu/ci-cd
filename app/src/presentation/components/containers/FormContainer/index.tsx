import React, { ReactElement } from 'react'
import { Platform, StatusBar } from 'react-native'
import { useTheme } from 'styled-components'

import { PrimaryButton } from '@components/buttons/PrimaryButton'
import { VerticalSpacing } from '@components/common/VerticalSpacing'

import { useAlertContext } from '@contexts/AlertContext'

import {
	Body, Container, Footer, Header, Pipe, Title, TitlePipeContainer
} from './styles'

interface FormContainerProps {
	title?: string
	buttonLabel?: string
	errorMessage?: string
	children: ReactElement | ReactElement[]
	secondaryButtonLabel?: string
	secondaryButtonMethod?: () => void
	validateField?: () => boolean
	onSubmit?: () => void
}

function FormContainer({ ...props }: FormContainerProps) {
	const { showContextModal } = useAlertContext()

	const theme = useTheme()

	const throwError = () => {
		showContextModal('Ops!', props.errorMessage)
	}

	const performSubmit = () => {
		if (props.validateField()) {
			return props.onSubmit && props.onSubmit()
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
			{
				(props.secondaryButtonMethod || props.onSubmit) && (
					<Footer>
						{
							props.secondaryButtonMethod && (
								<>
									<PrimaryButton
										label={props.secondaryButtonLabel}
										onPress={props.secondaryButtonMethod}
										filled={false}
									/>
									<VerticalSpacing height={10} />
								</>
							)
						}
						{
							props.onSubmit && (
								<PrimaryButton
									label={props.buttonLabel}
									onPress={performSubmit}
								/>
							)
						}
					</Footer>
				)
			}
		</Container>
	)
}

FormContainer.defaultProps = {
	onSubmit: null,
	title: 'title',
	buttonLabel: 'Continuar',
	errorMessage: 'Algo deu errado!',
	secondaryButtonLabel: 'Outro botão',
	secondaryButtonMethod: null,
	validateField: () => true
}

export { FormContainer }
