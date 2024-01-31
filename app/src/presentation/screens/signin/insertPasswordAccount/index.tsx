import React, { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import { AlertContext } from '@contexts/AlertContext'
import { AuthContext } from '@contexts/AuthContext'
import { LoaderContext } from '@contexts/LoaderContext'
import { UserDataContext } from '@contexts/UserDataContext'

import { InsertPasswordAccountScreenProps } from '@routes/stacks/SigninStack/screenProps'

import { UserAdapter } from '@presentation/adapters/user/UserAdapter'

import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'
import { LineInput } from '@presentation/components/inputs/LineInput'

const { passwordIsValid, performSignin } = UserAdapter()

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
			await performSignin(userAuthData.email, password, setUserDataOnContext)
			setLoaderIsVisible(false)
			navigation.navigate('Home')
		} catch (err: any) {
			setLoaderIsVisible(false)
			setTimeout(() => { // TODO check more elegant way to show error message
				showContextModal('Ops!', err.message)
			}, 300)
		}
	}

	return (
		<ScreenContainer
			topSafeAreaColor={theme.green4}
			padding={0}
		>
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

export { InsertPasswordAccount }
