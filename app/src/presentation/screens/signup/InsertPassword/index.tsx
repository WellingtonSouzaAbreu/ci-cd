import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { useUserDomain } from '@domain/user/useUserDomain'

import { useAlertContext } from '@contexts/AlertContext'
import { useAuthContext } from '@contexts/AuthContext'
import { useLoaderContext } from '@contexts/LoaderContext'

import { InsertPasswordScreenProps } from '@routes/stacks/RegisterStack/screenProps'

const { passwordIsValid } = useUserDomain()

function InsertPassword({ navigation }: InsertPasswordScreenProps) {
	const { showContextModal } = useAlertContext()
	const { setLoaderIsVisible } = useLoaderContext()
	const { setUserRegisterDataOnContext } = useAuthContext()

	const [password, setPassword] = useState<string>('')

	const theme = useTheme()

	const submitPassword = async () => {
		try {
			setLoaderIsVisible(true)
			setUserRegisterDataOnContext({ password })
			navigation.navigate('WelcomeNewUser')
		} catch (err: any) {
			console.log(err.code)
			return showContextModal('Ops!', err.code)
		} finally {
			setLoaderIsVisible(false)
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
