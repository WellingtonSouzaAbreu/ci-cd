import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { UserModel } from '@domain/user/adapter/UserModel'
import { useUserDomain } from '@domain/user/useUserDomain'

import { useAlertContext } from '@contexts/AlertContext'
import { useAuthContext } from '@contexts/AuthContext'

import { InsertPasswordScreenProps } from '@routes/stacks/RegisterStack/screenProps'

const { passwordIsValid } = useUserDomain()

function InsertPassword({ navigation }: InsertPasswordScreenProps) {
	const { showContextModal } = useAlertContext()
	const { setUserRegisterDataOnContext } = useAuthContext()

	const [password, setPassword] = useState<string>('')

	const theme = useTheme()

	const submitPassword = async () => {
		try {
			const validPassword = new UserModel.WeakPassword(password).value
			setUserRegisterDataOnContext({ password: validPassword })
			navigation.navigate('WelcomeNewUser')
		} catch (error: any) {
			showContextModal('', error.message)
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

export { InsertPassword }
