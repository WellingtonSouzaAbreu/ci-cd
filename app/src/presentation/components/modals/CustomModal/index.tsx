import React from 'react'
import { Modal, StatusBar } from 'react-native'

import { relativeScreenHeight } from '@presentation/utils/screenDimensions'

import {
	Container,
	ContentInner,
	Content,
	TouchCloseArea,
	Title,
	Description,
} from './styles'

import { PrimaryButton } from '@presentation/components/buttons/PrimaryButton'

interface CustomModalProps {
	title?: string
	description?: string
	buttonText?: string
	visibility: boolean
	closeModal: () => void
}

function CustomModal({ ...props }: CustomModalProps) {
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

CustomModal.defaultProps = {
	title: 'Ops!',
	description: '',
	buttonText: 'entendi'
}

export { CustomModal }
