import React, { useContext, useState } from 'react'

import { InsertUserNameScreenProps } from '@routes/stacks/RegisterStack/screenProps'
import { useTheme } from 'styled-components'

import { RegisterContext } from '@contexts/RegisterContext'

import { userNameIsValid } from '@presentation/adapters/UserAdapter'

import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'
import { LineInput } from '@presentation/components/inputs/LineInput'

function InsertUserName({ navigation }: InsertUserNameScreenProps) {
	const { setUserRegistrationDataOnContext } = useContext(RegisterContext)

	const [userName, setUserName] = useState<string>()

	const theme = useTheme()

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
				validateField={() => userNameIsValid(userName)}
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
