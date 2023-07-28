import React, { useContext, useState } from 'react'

import { InsertUserNameScreenProps } from '@routes/stack/RegisterStack/screenProps'
import { useTheme } from 'styled-components'

import { RegisterContext } from '@contexts/RegisterContext'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

function InsertUserName({ navigation }: InsertUserNameScreenProps) {
	const { setUserRegistrationDataOnContext } = useContext(RegisterContext)

	const [userName, setUserName] = useState<string>('Wellington Souza')

	const theme = useTheme()

	const validateUserName = (dirtyUserName: string) => {
		const cleanUserName = dirtyUserName.trim()

		if (!cleanUserName) return false
		return true
	}

	const submitUserName = async () => {
		setUserRegistrationDataOnContext({ name: userName })
		navigation.navigate('InsertEmail')
	}

	return (
		<ScreenContainer
			topSafeAreaColor={theme.green4}
			padding={0}
		>
			<FormContainer
				title={'Qual é o seu nome?'}
				errorMessage={'Esse nome não é válido!'}
				validateField={() => validateUserName(userName)}
				onSubmit={submitUserName}
			>
				<LineInput
					value={userName}
					placeholder={'Nome completo...'}
					onChangeText={setUserName}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertUserName }
