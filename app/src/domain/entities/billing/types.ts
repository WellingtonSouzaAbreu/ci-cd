type FinanceType = 'income' | 'expense'

export type Finance = {
	type: FinanceType
}

export type FinanceRegisterData = {
	type?: FinanceType
}
