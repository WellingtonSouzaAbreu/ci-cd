import { Finance } from '@domain/billing/entity/types'

interface UiFinanceUtilsInterface {
	translateFinanceType: (financeType: Finance['type']) => string
}

export { UiFinanceUtilsInterface }
