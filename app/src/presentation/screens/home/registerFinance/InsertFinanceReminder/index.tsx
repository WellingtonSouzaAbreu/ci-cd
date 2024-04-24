import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'
import { useUiFinanceUtils } from '@utils/finance/useUiFinanceUtils'

import { useFinanceRegisterContext } from '@contexts/FinanceRegisterContext'

import { InsertFinanceReminderScreenProps } from '@routes/stacks/FinanceRegisterStack/screenProps'

const { translateFinanceType } = useUiFinanceUtils()

function InsertFinanceReminder({ navigation }: InsertFinanceReminderScreenProps) {
	const { financeRegisterData, setFinanceDataOnContext } = useFinanceRegisterContext()
	const theme = useTheme()

	const [inputValue, setInputValue] = useState('')

	const submitValue = () => {
		console.log(inputValue)
		setFinanceDataOnContext({ value: parseFloat(inputValue) })
		navigateToNextScreen()
	}

	const navigateToNextScreen = () => {
		console.log('navigateToNextScreen')
		navigation.navigate('InsertFinanceReminder')
	}

	const financeType = translateFinanceType(financeRegisterData.type)

	return (
		<ScreenContainer
			topSafeAreaColor={theme.green3}
		>
			<FormContainer
				title={`Deseja inserir um lembrete para essa ${financeType}?`}
				onSubmit={submitValue}
				secondaryButtonLabel={'Pular'}
				secondaryButtonMethod={navigateToNextScreen}
			>
				<LineInput
					value={inputValue}
					placeholder={'Lembrete...'}
					onChangeText={setInputValue}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertFinanceReminder }
