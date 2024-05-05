import React from 'react'
import { Modal, StatusBar } from 'react-native'

import { PrimaryButton } from '@components/buttons/PrimaryButton'

import {
	Container,
	ContentInner,
	Content,
	TouchCloseArea,
	Title,
	Description,
} from './styles'
import { relativeScreenHeight } from '@presentation/common/screenDimensions'

interface AlertModalProps {
	title?: string
	description?: string
	buttonText?: string
	visibility: boolean
	closeModal: () => void
}

function AlertModal({ ...props }: AlertModalProps) {
	return (
		<Modal
			transparent
			visible={props.visibility}
			animationType={'fade'}
			onRequestClose={props.closeModal}
		>
			<StatusBar backgroundColor={'red'} barStyle={'dark-content'} />
			<Container>
				<TouchCloseArea onPress={props.closeModal} />
				<Content>
					<ContentInner>
						<Title>{props.title}</Title>
						<Description>{props.description}</Description>
						<PrimaryButton
							label={props.buttonText}
							customHeight={relativeScreenHeight(6)}
							onPress={props.closeModal}
						/>
					</ContentInner>
				</Content>
				<TouchCloseArea onPress={props.closeModal} />
			</Container>
		</Modal>
	)
}

AlertModal.defaultProps = {
	title: 'Ops!',
	description: '',
	buttonText: 'Entendi'
}

export { AlertModal }
