import { Entity } from '@domain/shared/valueObjects/Entity'

import { FinanceEntity, FinanceEntityOptional } from './types'

export class Finance extends Entity<Finance, FinanceEntityOptional> {
	readonly type: FinanceEntity['type']
	readonly financeCategory: string
	readonly value: number
	readonly reminder: string
	readonly date: Date
	readonly numberOfInstallments: FinanceEntity['numberOfInstallments']
	readonly createdAt: Date
	readonly updatedAt: Date

	constructor(props: FinanceEntityOptional) {
		super(props)

		this.type = props.type
		this.financeCategory = props.financeCategory
		this.value = props.value
		this.reminder = props.reminder
		this.date = props.date
		this.numberOfInstallments = props.numberOfInstallments
		this.createdAt = props.createdAt
		this.updatedAt = props.updatedAt
	}
}
