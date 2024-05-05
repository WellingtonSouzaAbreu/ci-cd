import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { UserModel } from '@domain/user/adapter/UserModel'

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
			const validEmail = new UserModel.Email(email).value
			if (await emailAlreadyRegistred(validEmail)) { // REFACTOR UseCase
				showContextModal('', 'Esse email já foi cadastrado!')
			} else {
				setUserRegisterDataOnContext({ email: validEmail })
				navigation.navigate('InsertPassword')
			}
		} catch (error) {
			showContextModal('', error.message)
		}
	}

	return (
		<ScreenContainer topSafeAreaColor={theme.green4}>
			<FormContainer
				title={'Insira seu email'}
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
