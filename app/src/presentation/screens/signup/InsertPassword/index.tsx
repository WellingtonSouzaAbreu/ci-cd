import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { useUserDomain } from '@domain/user/useUserDomain'

import { useAlertContext } from '@contexts/AlertContext'
import { useAuthContext } from '@contexts/AuthContext'
import { useLoaderContext } from '@contexts/LoaderContext'

import { InsertPasswordScreenProps } from '@routes/stacks/RegisterStack/screenProps'

import { useUserRepository } from '@data/user/useUserRepository'

const { passwordIsValid, performSignup, updateUserRepository } = useUserDomain()

function InsertPassword({ navigation }: InsertPasswordScreenProps) {
	const { showContextModal } = useAlertContext()
	const { setLoaderIsVisible } = useLoaderContext()
	const { userRegistrationData } = useAuthContext()
	const { setUserDataOnContext } = useAuthContext()

	const [password, setPassword] = useState<string>('')

	const theme = useTheme()

	const submitPassword = async () => {
		try {
			setLoaderIsVisible(true)

			const createdUser = await performSignup({ ...userRegistrationData, password })
			await updateUserRepository(createdUser, useUserRepository)
			setUserDataOnContext(createdUser)

			navigation.navigate('WelcomeNewUser')
		} catch (err: any) {
			console.log(err.code)
			switch (err.code) {
				case 'auth/email-already-in-use': return showContextModal('Ops!', 'O email já está sendo utilizado')
			}

			return showContextModal('Ops!', err.code)
		} finally {
			setLoaderIsVisible(false)
		}
	}

	return (
		<ScreenContainer topSafeAreaColor={theme.green4}>
			<FormContainer
				title={'Defina uma senha de acesso'}
				errorMessage={'Essa senha é muito curta!'}
				buttonLabel={'Criar conta'}
				validateField={() => passwordIsValid(password)}
				onSubmit={submitPassword}
			>
				<LineInput
					type={'password'}
					value={password}
					placeholder={'Senha...'}
					maxLength={25}
					secureTextEntry
					onChangeText={setPassword}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertPassword }
