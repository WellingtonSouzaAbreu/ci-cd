import React, { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import { InsertEmailScreenProps } from '@presentation/routes/stacks/RegisterStack/screenProps'

import { UserAdapter } from '@domain/adapters/user/UserAdapter'

import { AlertContext } from '@contexts/AlertContext'
import { RegisterContext } from '@contexts/RegisterContext'

import { emailAlreadyRegistred } from '@data/remoteRespository/user/emailAlreadyRegistred'

import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'
import { LineInput } from '@presentation/components/inputs/LineInput'

const { emailIsValid } = UserAdapter()

function InsertEmail({ navigation }: InsertEmailScreenProps) {
	const { showContextModal } = useContext(AlertContext)
	const { setUserRegistrationDataOnContext } = useContext(RegisterContext)

	const [email, setEmail] = useState<string>('')

	const theme = useTheme()

	const submitEmail = async () => {
		if (await emailAlreadyRegistred(email)) {
			showContextModal('Ops', 'Esse email já foi cadastrado!')
		} else {
			setUserRegistrationDataOnContext({ email })
			navigation.navigate('InsertPassword')
		}
	}

	return (
		<ScreenContainer
			topSafeAreaColor={theme.green4}
			padding={0}
		>
			<FormContainer
				title={'Insira seu email'}
				errorMessage={'Esse email não é válido!'}
				validateField={() => emailIsValid(email)}
				onSubmit={submitEmail}
			>
				<LineInput
					value={email}
					placeholder={'Email...'}
					keyboardType={'email-address'}
					onChangeText={setEmail}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertEmail }
