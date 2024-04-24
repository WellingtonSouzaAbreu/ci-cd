import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'
import { useUiFinanceUtils } from '@utils/finance/useUiFinanceUtils'

import { FinanceObjectsAdapter } from '@domain/finance/adapter/FinanceObjectsAdapter'

import { useAlertContext } from '@contexts/AlertContext'
import { useFinanceRegisterContext } from '@contexts/FinanceRegisterContext'

import { InsertFinanceReminderScreenProps } from '@routes/stacks/FinanceRegisterStack/screenProps'

const { translateFinanceType } = useUiFinanceUtils()

const { Description } = FinanceObjectsAdapter()

function InsertFinanceReminder({ navigation }: InsertFinanceReminderScreenProps) {
	const { financeRegisterData, setFinanceDataOnContext } = useFinanceRegisterContext()
	const { showContextModal } = useAlertContext()
	const theme = useTheme()

	const [reminderText, setReminderText] = useState('')

	const submitValue = () => {
		try {
			const description = new Description(reminderText, 1)

			setFinanceDataOnContext({ reminder: description.value })
			navigateToNextScreen()
		} catch (error) {
			console.log(error)
			showContextModal('', error.message)
		}
	}

	const navigateToNextScreen = () => {
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
					value={reminderText}
					placeholder={'Lembrete...'}
					onChangeText={setReminderText}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertFinanceReminder }
