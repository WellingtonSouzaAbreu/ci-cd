import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { SharedObjectsAdapter } from '@domain/shared/adapter/SharedObjectsAdapter'

import { useAlertContext } from '@contexts/AlertContext'
import { useFinanceRegisterContext } from '@contexts/FinanceRegisterContext'

import { InsertFinanceValueScreenProps } from '@routes/stacks/FinanceRegisterStack/screenProps'

import { InputContainar } from './styles'

const { MonetaryValue } = SharedObjectsAdapter

function InsertFinanceValue({ navigation }: InsertFinanceValueScreenProps) {
	const { showContextModal } = useAlertContext()
	const { setFinanceDataOnContext } = useFinanceRegisterContext()
	const theme = useTheme()

	const [inputValue, setInputValue] = useState('')

	const submitValue = () => {
		try {
			const monetaryValue = new MonetaryValue(inputValue)
			setFinanceDataOnContext({ value: monetaryValue.value })
			navigation.navigate('InsertFinanceReminder')
		} catch (error) {
			console.log(error)
			showContextModal('', error.message)
		}
	}

	return (
		<ScreenContainer
			topSafeAreaColor={theme.green3}
		>
			<FormContainer
				title={'Digite o valor'}
				onSubmit={submitValue}
			>
				<InputContainar>
					<LineInput
						value={inputValue}
						placeholder={'Valor...'}
						keyboardType={'numeric'}
						onChangeText={setInputValue}
					/>
				</InputContainar>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertFinanceValue }
