import React, { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import { AuthContext } from 'src/contexts/AuthContext'
import { InsertEmailAccountScreenProps } from '@presentation/routes/stacks/SigninStack/screenProps'

import { useUserDomain } from '@domain/user/useUserDomain'

import { AlertContext } from 'src/contexts/AlertContext'

import { emailAlreadyRegistred } from '@data/remoteRespository/user/emailAlreadyRegistred'

import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'
import { LineInput } from '@presentation/components/inputs/LineInput'

const { emailIsValid } = useUserDomain()

function InsertEmailAccount({ navigation }: InsertEmailAccountScreenProps) {
	const { showContextModal } = useContext(AlertContext)
	const { setUserAuthDataOnContext } = useContext(AuthContext)

	const [email, setEmail] = useState<string>('')

	const theme = useTheme()

	const submitEmail = async () => {
		if (!await emailAlreadyRegistred(email)) {
			showContextModal('Ops', 'Esse email não está cadastrado!')
		} else {
			setUserAuthDataOnContext({ email })
			navigation.navigate('InsertPasswordAccount')
		}
	}

	return (
		<ScreenContainer topSafeAreaColor={theme.green4}>
			<FormContainer
				title={'Insira seu email'}
				errorMessage={'Esse email não é válido!'}
				validateField={() => emailIsValid(email)}
				onSubmit={submitEmail}
			>
				<LineInput
					value={email}
					placeholder={'Email...'}
					autoCapitalize={'none'}
					keyboardType={'email-address'}
					onChangeText={setEmail}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertEmailAccount }
