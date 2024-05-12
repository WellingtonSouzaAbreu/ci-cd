import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { UserUseCases } from '@domain/user/adapter/UserUseCases'

import { useAlertContext } from '@contexts/AlertContext'
import { useAuthContext } from '@contexts/AuthContext'

import { InsertEmailAccountScreenProps } from '@routes/stacks/SigninStack/screenProps'

import { UserRemoteRepository } from '@data/user/UserRemoteRepository'

function InsertEmailAccount({ navigation }: InsertEmailAccountScreenProps) {
	const { showContextModal } = useAlertContext()
	const { setUserAuthDataOnContext } = useAuthContext()

	const [email, setEmail] = useState<string>('w@gmail.com')

	const theme = useTheme()

	const submitEmail = async () => {
		try {
			const [usedEmail, validEmail] = await UserUseCases.checkEmailAlreadyRegistered(UserRemoteRepository, email)
			if (!usedEmail) throw new Error('Este email não está cadastrado')

			setUserAuthDataOnContext({ email: validEmail })
			navigation.navigate('InsertPasswordAccount')
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
					autoCapitalize={'none'}
					keyboardType={'email-address'}
					onChangeText={setEmail}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertEmailAccount }
