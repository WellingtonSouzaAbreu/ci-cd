import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

import { useFinanceRegisterContext } from '@contexts/FinanceRegisterContext'

import { InputContainar } from './styles'

function InsertFinanceValue() {
	const { setFinanceDataOnContext } = useFinanceRegisterContext()
	const theme = useTheme()

	const [inputValue, setInputValue] = useState('')

	const submitValue = () => {
		console.log(inputValue)
		setFinanceDataOnContext({ value: parseFloat(inputValue) })
		// navigation.navigate('')
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
						returnKeyType={'done'}
						onChangeText={setInputValue}
					/>
				</InputContainar>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertFinanceValue }
