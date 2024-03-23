import React, { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import { LoaderContext } from '@contexts/LoaderContext'
import { UserDataContext } from '@contexts/UserDataContext'
import { InsertPasswordScreenProps } from '@routes/stacks/RegisterStack/screenProps'

import { useUserDomain } from '@domain/user/useUserDomain'

import { AlertContext } from '@contexts/AlertContext'
import { RegisterContext } from '@contexts/RegisterContext'

import { useUserRepository } from '@data/user/useUserRepository'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

const { passwordIsValid, performSignup, updateUserRepository } = useUserDomain()

function InsertPassword({ navigation }: InsertPasswordScreenProps) {
	const { showContextModal } = useContext(AlertContext)
	const { setLoaderIsVisible } = useContext(LoaderContext)
	const { userRegistrationData } = useContext(RegisterContext)
	const { setUserDataOnContext } = useContext(UserDataContext)

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
					value={password}
					placeholder={'Senha...'}
					maxLength={25}
					secretText
					secureTextEntry
					onChangeText={setPassword}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertPassword }
