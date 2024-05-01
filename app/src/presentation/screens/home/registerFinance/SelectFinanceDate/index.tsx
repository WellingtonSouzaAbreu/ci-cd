import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'

import { FinanceObjectsAdapter } from '@domain/finance/adapter/FinanceObjectsAdapter'

import { useAlertContext } from '@contexts/AlertContext'
import { useFinanceRegisterContext } from '@contexts/FinanceRegisterContext'

import { SelectFinanceDateScreenProps } from '@routes/stacks/FinanceRegisterStack/screenProps'

import { CalendarPicker } from './styles'

const { CustomDate } = FinanceObjectsAdapter()

function SelectFinanceDate({ navigation }: SelectFinanceDateScreenProps) {
	const { setFinanceDataOnContext } = useFinanceRegisterContext()
	const { showContextModal } = useAlertContext()
	const theme = useTheme()

	const [selectedDate, setSelectedDate] = useState(new Date())

	const submitValue = () => {
		try {
			const date = new CustomDate(selectedDate)

			setFinanceDataOnContext({ date: date.value })
			navigation.navigate('SelectFinanceRepeat')
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
				title={'Em que data esse valor foi ou será efetivado?'}
				onSubmit={submitValue}
			>
				<CalendarPicker
					value={selectedDate}
					locale={'pt-BR'}
					mode={'date'}
					display={'inline'}
					themeVariant={'light'}
					accentColor={theme.green5}
					onChange={(event, date) => setSelectedDate(date)}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { SelectFinanceDate }
