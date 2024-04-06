import React, { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { AlertContext } from '@contexts/AlertContext'
import { RegisterContext } from '@contexts/RegisterContext'

import { InsertEmailScreenProps } from '@routes/stacks/RegisterStack/screenProps'

import { emailAlreadyRegistred } from '@data/user/remoteRespository/emailAlreadyRegistred'

import { UserAdapter } from '../../../../domain/user/UserAdapter'

const { Email } = UserAdapter()

function InsertEmail({ navigation }: InsertEmailScreenProps) {
	const { showContextModal } = useContext(AlertContext)
	const { setUserRegisterDataOnContext } = useContext(RegisterContext)

	const [email, setEmail] = useState<string>('')

	const theme = useTheme()

	const submitEmail = async () => {
		try {
			new Email(email).validateEmail() // REFACTOR Isso não é assim

			if (await emailAlreadyRegistred(email)) {
				throwError('Esse email já foi cadastrado!')
			} else {
				setUserRegisterDataOnContext({ email })
				navigation.navigate('InsertPassword')
			}
		} catch (error) {
			throwError(error.message)
		}
	}

	const throwError = (errorMessage: string) => {
		showContextModal('Ops!', errorMessage)
	}

	const validateUserEmail = () => {
		return true
		// return new Email(email).validateEmail()
	}

	return (
		<ScreenContainer topSafeAreaColor={theme.green4}>
			<FormContainer
				title={'Insira seu email'}
				errorMessage={'Esse email não é válido!'} // Remover propriedade
				validateField={validateUserEmail}
				onSubmit={submitEmail}
			>
				<LineInput
					value={email}
					placeholder={'Email...'}
					keyboardType={'email-address'}
					autoCapitalize={'none'}
					onChangeText={setEmail}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertEmail }
