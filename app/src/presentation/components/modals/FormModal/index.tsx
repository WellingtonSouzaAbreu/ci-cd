import React from 'react'
import { Modal, StatusBar } from 'react-native'

import { PrimaryButton } from '@components/buttons/PrimaryButton'
import { VerticalSpacing } from '@components/common/VerticalSpacing'
import { LineInput } from '@components/inputs/LineInput'

import {
	Container,
	ContentInner,
	Content,
	TouchCloseArea,
	Title,
	InputContainer,
} from './styles'
import { relativeScreenHeight } from '@presentation/common/screenDimensions'

interface FormModalProps {
	title?: string
	description?: string
	buttonText?: string
	visibility: boolean
	closeModal: () => void
	onPress: (value: string) => void
}

function FormModal({ ...props }: FormModalProps) {
	const [inputText, setInputText] = React.useState('')

	const onPressButton = () => {
		props.onPress(inputText)
		clearInput()
		props.closeModal()
	}

	const clearInput = () => setInputText('')

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
						<InputContainer>
							<LineInput
								autoFocus
								value={inputText}
								placeholder={'Nova categoria...'}
								onChangeText={setInputText}
							/>
						</InputContainer>
						<VerticalSpacing />
						<PrimaryButton
							label={props.buttonText}
							customHeight={relativeScreenHeight(6)}
							onPress={onPressButton}
						/>
					</ContentInner>
				</Content>
				<TouchCloseArea onPress={props.closeModal} />
			</Container>
		</Modal>
	)
}

FormModal.defaultProps = {
	title: 'Title',
	description: '',
	buttonText: 'Entendi'
}

export { FormModal }
