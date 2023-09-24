import React, { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import { AlertContext } from '@contexts/AlertContext'
import { LoaderContext } from '@contexts/LoaderContext'
import { RegisterContext } from '@contexts/RegisterContext'
import { UserDataContext } from '@contexts/UserDataContext'

import { InsertPasswordScreenProps } from '@routes/stacks/RegisterStack/screenProps'

import { UserAdapter } from '@presentation/adapters/UserAdapter'

import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'
import { LineInput } from '@presentation/components/inputs/LineInput'

const { passwordIsValid, performSignup } = UserAdapter()

function InsertPassword({ navigation }: InsertPasswordScreenProps) {
	const { showContextModal } = useContext(AlertContext)
	const { setLoaderIsVisible } = useContext(LoaderContext)
	const { userRegistrationData } = useContext(RegisterContext)
	const { userData, setUserDataOnContext } = useContext(UserDataContext)

	const [password, setPassword] = useState<string>('')

	const theme = useTheme()

	const submitPassword = async () => {
		try {
			setLoaderIsVisible(true)
			console.log(userData)
			await performSignup(userRegistrationData.name, userRegistrationData.email, password, setUserDataOnContext)
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

export { InsertPassword }
