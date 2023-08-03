import React, { useContext, useState } from 'react'

import { emailAlreadyRegistred } from '@data/firestore/user/emailAlreadyRegistred'
import { InsertEmailScreenProps } from '@routes/stacks/RegisterStack/screenProps'
import { useTheme } from 'styled-components'

import { AlertContext } from '@contexts/AlertContext'
import { RegisterContext } from '@contexts/RegisterContext'

import { emailIsValid } from '@presentation/adapters/UserAdapter'

import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'
import { LineInput } from '@presentation/components/inputs/LineInput'

function InsertEmail({ navigation }: InsertEmailScreenProps) {
	const { showContextModal } = useContext(AlertContext)
	const { setUserRegistrationDataOnContext } = useContext(RegisterContext)

	const [email, setEmail] = useState<string>('@gmail.com')

	const theme = useTheme()

	const submitEmail = async () => {
		setUserRegistrationDataOnContext({ email })

		if (await emailAlreadyRegistred(email)) {
			showContextModal('Ops', 'Esse email já foi cadastrado!')
		} else {
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
