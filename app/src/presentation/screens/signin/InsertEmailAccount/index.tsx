import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { UserModel } from '@domain/user/adapter/UserModel'
import { useUserDomain } from '@domain/user/useUserDomain'

import { useAlertContext } from '@contexts/AlertContext'
import { useAuthContext } from '@contexts/AuthContext'

import { InsertEmailAccountScreenProps } from '@routes/stacks/SigninStack/screenProps'

import { emailAlreadyRegistred } from '@data/user/remoteRespository/emailAlreadyRegistred'

const { emailIsValid } = useUserDomain()

function InsertEmailAccount({ navigation }: InsertEmailAccountScreenProps) {
	const { showContextModal } = useAlertContext()
	const { setUserAuthDataOnContext } = useAuthContext()

	const [email, setEmail] = useState<string>('w@gmail.com')

	const theme = useTheme()

	const submitEmail = async () => {
		try {
			const validEmail = new UserModel.Email(email).value
			if (!await emailAlreadyRegistred(validEmail)) { // REFACTOR UseCase
				showContextModal('', 'Esse email já foi cadastrado!')
			} else {
				setUserAuthDataOnContext({ email: validEmail })
				navigation.navigate('InsertPasswordAccount')
			}
		} catch (error) {
			showContextModal('', error.message)
		}
	}

	return (
		<ScreenContainer topSafeAreaColor={theme.green4}>
			<FormContainer
				title={'Insira seu email'}
				validateField={() => emailIsValid(email)}
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
