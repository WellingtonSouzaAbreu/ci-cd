type FinanceType = 'income' | 'expense'

export type FinanceEntityOptional = Partial<FinanceEntity>
export type FinanceEntity = {
	type: FinanceType
	financeCategory: string
	value: number
	reminder: string
	date: Date
}
