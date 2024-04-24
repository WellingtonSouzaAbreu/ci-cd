import React, { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { AlertContext } from '@contexts/AlertContext'
import { RegisterContext } from '@contexts/RegisterContext'

import { InsertUserNameScreenProps } from '@routes/stacks/RegisterStack/screenProps'

function InsertUserName({ navigation }: InsertUserNameScreenProps) {
	const { setUserRegisterDataOnContext } = useContext(RegisterContext)

	const [userName, setUserName] = useState<string>()

	const theme = useTheme()

	const { showContextModal } = useContext(AlertContext)

	const submitUserName = async () => {
		try {
			setUserRegisterDataOnContext({ name: userName })
			navigation.navigate('InsertEmail')
		} catch (error) {
			throwError(error.message)
		}
	}

	const validateNameField = () => {
		return true
		// return new UserName(userName).validateUserName()
	}

	const throwError = (errorMessage: string) => {
		showContextModal('Ops!', errorMessage)
	}

	return (
		<ScreenContainer topSafeAreaColor={theme.green4}>
			<FormContainer
				title={'Qual é o seu nome?'}
				validateField={validateNameField}
				onSubmit={submitUserName}
			>
				<LineInput
					value={userName}
					placeholder={'Nome...'}
					autoCapitalize={'words'}
					onChangeText={setUserName}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertUserName }
