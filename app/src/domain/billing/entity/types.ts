type FinanceType = 'income' | 'expense'

export type FinanceRepository = { // REFACTOR FinanceRepository
	type: FinanceType
	financeCategory: string
}
