import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { useAlertContext } from '@contexts/AlertContext'
import { useAuthContext } from '@contexts/AuthContext'

import { InsertUserNameScreenProps } from '@routes/stacks/RegisterStack/screenProps'

function InsertUserName({ navigation }: InsertUserNameScreenProps) {
	const { setUserRegisterDataOnContext } = useAuthContext()

	const [userName, setUserName] = useState<string>()

	const theme = useTheme()

	const { showContextModal } = useAlertContext()

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
