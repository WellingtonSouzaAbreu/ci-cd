import { FinanceEntity } from '@domain/finance/entity/types'

interface UiFinanceUtilsInterface {
	translateFinanceType: (financeType: FinanceEntity['type']) => string
}

export { UiFinanceUtilsInterface }
