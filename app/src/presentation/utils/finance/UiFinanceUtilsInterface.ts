import { Finance } from '@domain/entities/billing/types'

interface UiFinanceUtilsInterface {
	translateFinanceType: (financeType: Finance['type']) => string
}

export { UiFinanceUtilsInterface }
