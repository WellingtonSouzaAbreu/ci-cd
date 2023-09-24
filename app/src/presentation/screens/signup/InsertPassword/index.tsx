import React, { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import { AlertContext } from '@contexts/AlertContext'
import { LoaderContext } from '@contexts/LoaderContext'
import { RegisterContext } from '@contexts/RegisterContext'

import { InsertPasswordScreenProps } from '@routes/stacks/RegisterStack/screenProps'

import { UserAdapter } from '@presentation/adapters/UserAdapter'

import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'
import { LineInput } from '@presentation/components/inputs/LineInput'

const { passwordIsValid, performSignup } = UserAdapter()

function InsertPassword({ navigation }: InsertPasswordScreenProps) {
	const { showContextModal } = useContext(AlertContext)
	const { setLoaderIsVisible } = useContext(LoaderContext)
	const { userData } = useContext(RegisterContext)

	const [password, setPassword] = useState<string>('')

	const theme = useTheme()

	const submitPassword = async () => {
		try {
			setLoaderIsVisible(true)
			await performSignup(userData.name, userData.email, password) // TODO Realizar injeção de dependência
			setLoaderIsVisible(false)
			navigation.navigate('WelcomeNewUser')
		} catch (err: any) {
			setLoaderIsVisible(false)
			console.log(err.message)
			showContextModal('Ops!', err.message)
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
