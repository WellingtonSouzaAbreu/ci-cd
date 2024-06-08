import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { UserModel } from '@domain/user/adapter/UserModel'

import { useAlertContext } from '@contexts/AlertContext'
import { useAuthContext } from '@contexts/AuthContext'

import { InsertUserNameScreenProps } from '@routes/stacks/RegisterStack/screenProps'

function InsertUserName({ navigation }: InsertUserNameScreenProps) {
	const { setUserRegisterDataOnContext } = useAuthContext()

	const [userName, setUserName] = useState<string>()

	const theme = useTheme()

	const { showContextModal } = useAlertContext()

	const submitUserName = async () => {
		try {
			const name = new UserModel.UserName(userName).value
			setUserRegisterDataOnContext({ name })
			navigation.navigate('InsertEmail')
		} catch (error) {
			console.log(error)
			showContextModal('', error.message)
		}
	}

	return (
		<ScreenContainer topSafeAreaColor={theme.green4}>
			<FormContainer
				title={'Qual é o seu nome?'}
				onSubmit={submitUserName}
			>
				<LineInput
					value={userName}
					placeholder={'Nome...'}
					autoCapitalize={'words'}
					onChangeText={setUserName}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertUserName }
