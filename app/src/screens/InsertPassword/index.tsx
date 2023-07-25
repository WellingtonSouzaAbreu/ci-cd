import React, { useContext, useState } from 'react'

import { InsertPasswordScreenProps } from '@routes/stack/RegisterStack/screenProps'
import { useTheme } from 'styled-components'

import { RegisterContext } from '@contexts/RegisterContext'

import { performSignup } from '@services/firebase/user/signup'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

function InsertPassword({ navigation }: InsertPasswordScreenProps) {
	const { userData } = useContext(RegisterContext)

	const [password, setPassword] = useState<string>('')

	const theme = useTheme()

	const validatePassword = (dirtyPassword: string) => {
		const cleanPassword = dirtyPassword.trim()

		if (cleanPassword.length < 6) return false
		return true
	}

	const submitPassword = async () => {
		await performSignup(userData.email, password)
	}

	return (
		<ScreenContainer
			topSafeAreaColor={theme.green4}
			padding={0}
		>
			<FormContainer
				title={'Insira sua senha'}
				errorMessage={'Essa senha é muito curta!'}
				validateField={() => validatePassword(password)}
				onSubmit={submitPassword}
			>
				<LineInput
					value={password}
					placeholder={'Senha...'}
					keyboardType={'visible-password'}
					onChangeText={setPassword}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertPassword }
