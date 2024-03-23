import { Finance } from '@domain/billing/entity/types'

function translateFinanceType(financeType: Finance['type']) {
	if (financeType === 'income') return 'receita'
	if (financeType === 'expense') return 'despesa'
	return 'conta'
}

export { translateFinanceType }
