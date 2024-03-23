import { FinanceRepository } from '@domain/billing/entity/types'

interface UiFinanceUtilsInterface {
	translateFinanceType: (financeType: FinanceRepository['type']) => string
}

export { UiFinanceUtilsInterface }
