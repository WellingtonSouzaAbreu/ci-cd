import React from 'react'
import { useTheme } from 'styled-components'

import { ListOfDatedFinances } from '@components/common/ListOfDatedFinances'
import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { useUiFinanceUtils } from '@utils/finance/useUiFinanceUtils'

import { FinanceUseCases } from '@domain/finance/adapter/FinanceUseCases'

import { useAlertContext } from '@contexts/AlertContext'
import { useAuthContext } from '@contexts/AuthContext'
import { useFinanceRegisterContext } from '@contexts/FinanceRegisterContext'
import { useLoaderContext } from '@contexts/LoaderContext'

import { FinanceSummaryScreenProps } from '@routes/stacks/FinanceRegisterStack/screenProps'

import { FinanceRemoteRepository } from '@data/finance/FinanceRemoteRepository'

import { FinanceCategory, FinanceCategoryCard, ReminderText, SummaryHeader } from './styles'

const { translateFinanceType } = useUiFinanceUtils()
const { generateFinanceForecast, createFinance } = FinanceUseCases

function FinanceSummary({ navigation }: FinanceSummaryScreenProps) {
	const { authenticatedUser } = useAuthContext()
	const { setLoaderIsVisible } = useLoaderContext()
	const { financeRegisterData } = useFinanceRegisterContext()
	const { showContextModal } = useAlertContext()

	const theme = useTheme()

	const saveFinance = async () => {
		try {
			setLoaderIsVisible(true)
			await createFinance(
				FinanceRemoteRepository,
				authenticatedUser,
				financeRegisterData
			)
			setLoaderIsVisible(false)
			// setFinanceDataOnContext({  }) // TODO atualizar contexto. Criar outro ou atribuir ao contexto do usuário?
			navigation.popToTop()
		} catch (error) {
			setLoaderIsVisible(false)
			console.log(error)
			showContextModal('', error.message)
		}
	}

	const financeType = translateFinanceType(financeRegisterData.type)

	const generateFinanceRegisters = () => {
		try {
			return generateFinanceForecast({
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
				onSubmit={saveFinance}
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
