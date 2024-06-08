import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { UserModel } from '@domain/user/adapter/UserModel'
import { useUserDomain } from '@domain/user/useUserDomain'

import { useAlertContext } from '@contexts/AlertContext'
import { useAuthContext } from '@contexts/AuthContext'
import { useLoaderContext } from '@contexts/LoaderContext'

import { useAuthNavigation } from '@routes/stacks/hooks/useAuthNavigation'

import { useAuthenticationService } from '@services/authentication/useAuthenticationService'

const { updateUserRepository, performSignin } = useUserDomain()

function InsertPasswordAccount() {
	const { showContextModal } = useAlertContext()
	const { setLoaderIsVisible } = useLoaderContext()
	const { userAuthData } = useAuthContext()
	const { setUserDataOnContext } = useAuthContext()

	const { navigateToHome } = useAuthNavigation()

	const [password, setPassword] = useState<string>('123456')

	const theme = useTheme()

	const submitPassword = async () => {
		try {
			setLoaderIsVisible(true)
			// REFACTOR Quando o performSignin for migrado para um useCase no domínio,
			// a validação será realizada inernamente
			const validPassword = new UserModel.WeakPassword(password).value

			const userData = await performSignin(userAuthData.email, validPassword, useAuthenticationService)
			await updateUserRepository(userData) // Realizar update dentro do signin
			setUserDataOnContext(userData)

			setLoaderIsVisible(false)
			navigateToHome()
		} catch (error: any) {
			console.log(error)
			setLoaderIsVisible(false)
			setTimeout(() => {
				showContextModal('', error.message)
			}, 300) // delay to show the modal por causa do loading que também é um modal
		}
	}

	return (
		<ScreenContainer topSafeAreaColor={theme.green4}>
			<FormContainer
				title={'Defina uma senha de acesso'}
				buttonLabel={'Acessar conta'}
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

export { InsertPasswordAccount }
