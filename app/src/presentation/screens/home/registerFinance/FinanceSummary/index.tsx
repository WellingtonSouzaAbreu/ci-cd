import React from 'react'
import { useTheme } from 'styled-components'

import { ListOfDatedFinances } from '@components/common/ListOfDatedFinances'
import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { useUiFinanceUtils } from '@utils/finance/useUiFinanceUtils'

import { GenerateFinanceForecast } from '@domain/finance/useCases/GenerateFinanceForecast'

import { useAlertContext } from '@contexts/AlertContext'
import { useFinanceRegisterContext } from '@contexts/FinanceRegisterContext'
import { useLoaderContext } from '@contexts/LoaderContext'

import { FinanceSummaryScreenProps } from '@routes/stacks/FinanceRegisterStack/screenProps'

import { FinanceCategory, FinanceCategoryCard, ReminderText, SummaryHeader } from './styles'

const { translateFinanceType } = useUiFinanceUtils()
// const { GenerateFinanceForecast } = FinanceUseCasesAdapter()

function FinanceSummary({ navigation }: FinanceSummaryScreenProps) {
	const { setLoaderIsVisible } = useLoaderContext()
	const { financeRegisterData } = useFinanceRegisterContext()
	const { showContextModal } = useAlertContext()
	const theme = useTheme()

	const submitValue = () => {
		try {
			setLoaderIsVisible(true)

			setTimeout(() => {
				setLoaderIsVisible(false)
			}, 2000)

			// setFinanceDataOnContext({  })
			// navigation.popToTop()
		} catch (error) {
			console.log(error)
			showContextModal('', error.message)
		}
	}

	const financeType = translateFinanceType(financeRegisterData.type)

	const generateFinanceRegisters = () => {
		try {
			const financeForecast = new GenerateFinanceForecast()
			return financeForecast.exec({
				date: financeRegisterData.date,
				value: financeRegisterData.value,
				numberOfInstallments: financeRegisterData.numberOfInstallments
			})
		} catch (error) {
			console.log(error)
			showContextModal('', error.message)
		}
	}

	const financeRegisters = generateFinanceRegisters()

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
