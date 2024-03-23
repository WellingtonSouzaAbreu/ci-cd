import React, { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { useUserDomain } from '@domain/user/useUserDomain'

import { RegisterContext } from '@contexts/RegisterContext'

import { InsertUserNameScreenProps } from '@routes/stacks/RegisterStack/screenProps'

const { userNameIsValid } = useUserDomain()

function InsertUserName({ navigation }: InsertUserNameScreenProps) {
	const { setUserRegisterDataOnContext } = useContext(RegisterContext)

	const [userName, setUserName] = useState<string>()

	const theme = useTheme()

	const submitUserName = async () => {
		setUserRegisterDataOnContext({ name: userName })
		navigation.navigate('InsertEmail')
	}

	return (
		<ScreenContainer topSafeAreaColor={theme.green4}>
			<FormContainer
				title={'Qual é o seu nome?'}
				errorMessage={'Esse nome não é válido!'}
				validateField={() => userNameIsValid(userName)}
				onSubmit={submitUserName}
			>
				<LineInput
					value={userName}
					placeholder={'Nome completo...'}
					autoCapitalize={'words'}
					onChangeText={setUserName}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertUserName }
