import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { UserUseCases } from '@domain/user/adapter/UserUseCases'

import { useAlertContext } from '@contexts/AlertContext'
import { useAuthContext } from '@contexts/AuthContext'

import { InsertEmailScreenProps } from '@routes/stacks/RegisterStack/screenProps'

import { UserRemoteRepository } from '@data/user/UserRemoteRepository'

function InsertEmail({ navigation }: InsertEmailScreenProps) {
	const { showContextModal } = useAlertContext()
	const { setUserRegisterDataOnContext } = useAuthContext()

	const [email, setEmail] = useState<string>('')

	const theme = useTheme()

	const submitEmail = async () => {
		try {
			try {
				const [usedEmail, validEmail] = await UserUseCases.checkEmailAlreadyRegistered(UserRemoteRepository, email)
				console.log('usedEmail', usedEmail)
				if (usedEmail) throw new Error('Este email já foi cadastrado')

				setUserRegisterDataOnContext({ email: validEmail })
				navigation.navigate('InsertPassword')
			} catch (error) {
				showContextModal('', error.message)
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
