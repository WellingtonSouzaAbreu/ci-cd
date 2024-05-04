import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { UserObjectsAdapter } from '@domain/user/adapter/UserObjectsAdapter'

import { useAlertContext } from '@contexts/AlertContext'
import { useAuthContext } from '@contexts/AuthContext'

import { InsertEmailScreenProps } from '@routes/stacks/RegisterStack/screenProps'

import { emailAlreadyRegistred } from '@data/user/remoteRespository/emailAlreadyRegistred'

function InsertEmail({ navigation }: InsertEmailScreenProps) {
	const { showContextModal } = useAlertContext()
	const { setUserRegisterDataOnContext } = useAuthContext()

	const [email, setEmail] = useState<string>('')

	const theme = useTheme()

	const submitEmail = async () => {
		try {
			if (await emailAlreadyRegistred(email)) { // REFACTOR UseCase
				showContextModal('', 'Esse email já foi cadastrado!')
			} else {
				const validEmail = new UserObjectsAdapter.Email(email).value
				setUserRegisterDataOnContext({ email: validEmail })
				navigation.navigate('InsertPassword')
			}
		} catch (error) {
			showContextModal('Ops!', error.message)
		}
	}

	return (
		<ScreenContainer topSafeAreaColor={theme.green4}>
			<FormContainer
				title={'Insira seu email'}
				errorMessage={'Esse email não é válido!'} // Remover propriedade
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
