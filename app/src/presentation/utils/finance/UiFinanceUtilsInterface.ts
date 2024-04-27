import { FinanceEntity } from '@domain/finance/model/entity/types'

interface UiFinanceUtilsInterface {
	translateFinanceType: (financeType: FinanceEntity['type']) => string
}

export { UiFinanceUtilsInterface }
