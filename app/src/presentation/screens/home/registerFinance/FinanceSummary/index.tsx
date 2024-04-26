import React from 'react'
import { useTheme } from 'styled-components'

import { ListOfDatedFinances } from '@components/common/ListOfDatedFinances'
import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { useUiFinanceUtils } from '@utils/finance/useUiFinanceUtils'

import { useAlertContext } from '@contexts/AlertContext'
import { useFinanceRegisterContext } from '@contexts/FinanceRegisterContext'

import { FinanceSummaryScreenProps } from '@routes/stacks/FinanceRegisterStack/screenProps'

import { FinanceCategory, FinanceCategoryCard, ReminderText, SummaryHeader } from './styles'

const { translateFinanceType } = useUiFinanceUtils()

function FinanceSummary({ navigation }: FinanceSummaryScreenProps) {
	const { financeRegisterData } = useFinanceRegisterContext()
	const { showContextModal } = useAlertContext()
	const theme = useTheme()

	const submitValue = () => {
		try {
			// setFinanceDataOnContext({  })
			navigation.navigate('FinanceSummary')
		} catch (error) {
			console.log(error)
			showContextModal('', error.message)
		}
	}

	const financeType = translateFinanceType(financeRegisterData.type)

	const financeRegisters = [
		{
			date: '30/jan',
			amount: 'R$ 100,00'
		},
		{
			date: '30/fev',
			amount: 'R$ 2000,00'
		},
		{
			date: '02/mar',
			amount: 'R$ 50,00'
		},
		{
			date: '02/mar',
			amount: 'R$ 50,00'
		},
		{
			date: '02/mar',
			amount: 'R$ 50,00'
		},
		{
			date: '02/mar',
			amount: 'R$ 50,00'
		},
		{
			date: '02/mar',
			amount: 'R$ 50,00'
		},
		{
			date: '02/mar',
			amount: 'R$ 50,00'
		},
		{
			date: '02/mar',
			amount: 'R$ 50,00'
		}
	]

	return (
		<ScreenContainer
			topSafeAreaColor={theme.green3}
		>
			<FormContainer
				title={`Resumo da ${financeType}`}
				onSubmit={submitValue}
				buttonLabel={'Finalizar'}
			>
				<SummaryHeader>
					<ReminderText>{financeRegisterData.reminder}</ReminderText>
					<FinanceCategoryCard>
						<FinanceCategory>{financeRegisterData.financeCategory}</FinanceCategory>
					</FinanceCategoryCard>
				</SummaryHeader>
				<ListOfDatedFinances financeRegisters={financeRegisters} />
			</FormContainer>
		</ScreenContainer>
	)
}

export { FinanceSummary }
