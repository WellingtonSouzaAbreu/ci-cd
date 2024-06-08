import { EntityProps } from '@domain/shared/valueObjects/Entity'

type FinanceType = 'income' | 'expense'

export type FinanceEntityOptional = Partial<FinanceEntity>

export interface FinanceEntity extends EntityProps {
	ownerId: string
	type: FinanceType
	financeCategory: string
	value: number
	reminder?: string
	date: Date
	numberOfInstallments: number
	createdAt: Date
	updatedAt?: Date
}
