import React, { useState } from 'react'

import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

function InsertEmail() {
	const [email, setEmail] = useState<string>('')

	const theme = useTheme()

	const validateEmail = (textEmail: string) => {
		const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

		if (!textEmail.includes('@')) return false
		if (!regexEmail.test(email)) return false
		return true
	}

	return (
		<ScreenContainer
			topSafeAreaColor={theme.green4}
			padding={0}
		>
			<FormContainer
				title={'Insira seu email'}
				errorMessage={'Esse email não é válido!'}
				validateField={() => validateEmail(email)}
				onSubmit={() => console.log(email)}
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
