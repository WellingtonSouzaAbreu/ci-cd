import React, { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import { InsertUserNameScreenProps } from '@presentation/routes/stacks/RegisterStack/screenProps'

import { UserAdapter } from '@domain/adapters/user/UserAdapter'

import { RegisterContext } from '@contexts/RegisterContext'

import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'
import { LineInput } from '@presentation/components/inputs/LineInput'

const { userNameIsValid } = UserAdapter()

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
