import React from 'react'
import { Modal, StatusBar } from 'react-native'

import { PrimaryButton } from '@components/buttons/PrimaryButton'

import {
	Container,
	ContentInner,
	Content,
	TouchCloseArea,
} from './styles'

interface CustomModalProps {
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
						<PrimaryButton
							onPress={() => null}
						/>
					</ContentInner>
				</Content>
				<TouchCloseArea onPress={props.closeModal} />
			</Container>
		</Modal>
	)
}

export { CustomModal }
