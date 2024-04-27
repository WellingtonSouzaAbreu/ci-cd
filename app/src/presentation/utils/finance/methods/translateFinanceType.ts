import { FinanceEntity } from '@domain/finance/model/entity/types'

function translateFinanceType(financeType: FinanceEntity['type']) {
	if (financeType === 'income') return 'receita'
	if (financeType === 'expense') return 'despesa'
	return 'conta'
}

export { translateFinanceType }
