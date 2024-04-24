import { FinanceEntity } from '@domain/billing/entity/types'

interface UiFinanceUtilsInterface {
	translateFinanceType: (financeType: FinanceEntity['type']) => string
}

export { UiFinanceUtilsInterface }
