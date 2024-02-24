import React, { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import { AuthContext } from '@presentation/contexts/AuthContext'
import { LoaderContext } from '@presentation/contexts/LoaderContext'
import { UserDataContext } from '@presentation/contexts/UserDataContext'
import { InsertPasswordAccountScreenProps } from '@presentation/routes/stacks/SigninStack/screenProps'

import { UserUseCaseAdapter } from '@domain/adapters/user/UserUseCaseAdapter'

import { AlertContext } from '@contexts/AlertContext'

import { AuthenticationServiceAdapter } from '@services/authentication/AuthenticationServiceAdapter'

import { UserRepositoryAdapter } from '@data/user/UserRepositoryAdapter'

import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'
import { LineInput } from '@presentation/components/inputs/LineInput'

const { passwordIsValid, performSignin } = UserUseCaseAdapter()

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
			const userData = await performSignin(userAuthData.email, password, AuthenticationServiceAdapter, UserRepositoryAdapter)
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
