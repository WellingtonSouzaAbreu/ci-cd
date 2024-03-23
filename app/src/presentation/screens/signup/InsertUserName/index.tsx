import React, { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import { InsertUserNameScreenProps } from '@presentation/routes/stacks/RegisterStack/screenProps'

import { useUserDomain } from '@domain/user/useUserDomain'

import { RegisterContext } from 'src/contexts/RegisterContext'

import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'
import { LineInput } from '@presentation/components/inputs/LineInput'

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
