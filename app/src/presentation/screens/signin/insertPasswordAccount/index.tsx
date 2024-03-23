import React, { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { useUserDomain } from '@domain/user/useUserDomain'

import { AlertContext } from '@contexts/AlertContext'
import { AuthContext } from '@contexts/AuthContext'
import { LoaderContext } from '@contexts/LoaderContext'
import { UserDataContext } from '@contexts/UserDataContext'

import { InsertPasswordAccountScreenProps } from '@routes/stacks/SigninStack/screenProps'

import { useAuthenticationService } from '@services/authentication/useAuthenticationService'

import { useUserRepository } from '@data/user/useUserRepository'

const { passwordIsValid, performSignin } = useUserDomain()

function InsertPasswordAccount({ navigation }: InsertPasswordAccountScreenProps) {
	const { showContextModal } = useContext(AlertContext)
	const { setLoaderIsVisible } = useContext(LoaderContext)
	const { userAuthData } = useContext(AuthContext)
	const { setUserDataOnContext } = useContext(UserDataContext)

	const [password, setPassword] = useState<string>('')

	const theme = useTheme()

	const submitPassword = async () => {
		try {
			setLoaderIsVisible(true)
			const userData = await performSignin(userAuthData.email, password, useAuthenticationService, useUserRepository)
			setUserDataOnContext(userData)
			setLoaderIsVisible(false)
			navigation.reset({ index: 0, routes: [{ name: 'HomeTab' }] })
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

export { InsertPasswordAccount }
