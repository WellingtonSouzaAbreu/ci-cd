import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { useUserDomain } from '@domain/user/useUserDomain'

import { useAlertContext } from '@contexts/AlertContext'
import { useAuthContext } from '@contexts/AuthContext'
import { useLoaderContext } from '@contexts/LoaderContext'

import { useAuthNavigation } from '@routes/stacks/hooks/useAuthNavigation'

import { useAuthenticationService } from '@services/authentication/useAuthenticationService'

import { useUserRepository } from '@data/user/useUserRepository'

const { passwordIsValid, updateUserRepository, performSignin } = useUserDomain()

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

			const userData = await performSignin(userAuthData.email, password, useAuthenticationService, useUserRepository)
			setUserDataOnContext(userData)
			await updateUserRepository(userData, useUserRepository)
			setUserDataOnContext(userData)

			setLoaderIsVisible(false)
			navigateToHome()
		} catch (error: any) {
			console.log(error)
			setLoaderIsVisible(false)
			setTimeout(() => {
				showContextModal('Ops!', error.message)
			}, 300)
		}
	}

	return (
		<ScreenContainer topSafeAreaColor={theme.green4}>
			<FormContainer
				title={'Defina uma senha de acesso'}
				errorMessage={'Essa senha é muito curta!'}
				buttonLabel={'Acessar conta'}
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

export { InsertPasswordAccount }
