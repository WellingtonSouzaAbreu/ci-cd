import React, { useContext, useState } from 'react'

import { InsertPasswordScreenProps } from '@routes/stack/RegisterStack/screenProps'
import { useTheme } from 'styled-components'

import { AlertContext } from '@contexts/AlertContext'
import { RegisterContext } from '@contexts/RegisterContext'

import { performSignup } from '@services/firebase/user/signup'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

function InsertPassword({ navigation }: InsertPasswordScreenProps) {
	const { showContextModal } = useContext(AlertContext)
	const { userData } = useContext(RegisterContext)

	const [password, setPassword] = useState<string>('')

	const theme = useTheme()

	const validatePassword = (dirtyPassword: string) => {
		const cleanPassword = dirtyPassword.trim()

		if (cleanPassword.length < 6) return false
		return true
	}

	const submitPassword = async () => {
		try {
			await performSignup(userData.email, password)
			navigation.navigate('WelcomeNewUser')
		} catch (err) {
			console.log(err)
			showContextModal('Ops!', err)
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
				validateField={() => validatePassword(password)}
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
