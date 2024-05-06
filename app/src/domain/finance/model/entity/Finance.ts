import { CustomDate } from '@domain/shared/valueObjects/CustomDate'
import { Description } from '@domain/shared/valueObjects/Description'
import { Entity } from '@domain/shared/valueObjects/Entity'
import { Id } from '@domain/shared/valueObjects/Id'
import { MonetaryValue } from '@domain/shared/valueObjects/MonetaryValue'
import { SimpleText } from '@domain/shared/valueObjects/SimpleText'

import { FinanceEntityOptional } from './types'

import { FinanceType } from '../valueObjects/FinanceType'
import { Installments } from '../valueObjects/Installment'

export class Finance extends Entity<Finance, FinanceEntityOptional> {
	private readonly stored: boolean

	readonly ownerId: Id
	readonly type: FinanceType
	readonly financeCategory: SimpleText
	readonly value: MonetaryValue
	readonly reminder: Description
	readonly date: CustomDate
	readonly numberOfInstallments: Installments
	readonly createdAt: CustomDate
	readonly updatedAt: CustomDate

	constructor(props: FinanceEntityOptional, register?: boolean) {
		super({ ...props, id: register ? 'aplicationId' : props.id })

		this.ownerId = new Id(props.ownerId)
		this.type = new FinanceType(props.type)
		this.financeCategory = new SimpleText(props.financeCategory)
		this.value = new MonetaryValue(props.value)
		this.reminder = new Description(props.reminder, 1)
		this.date = new CustomDate(props.date)
		this.numberOfInstallments = new Installments(props.numberOfInstallments)
		this.createdAt = new CustomDate(props.createdAt)
		this.updatedAt = new CustomDate(props.createdAt || new Date())
	}

	get data(): FinanceEntityOptional {
		return {
			...this.props,
			type: this.type.value,
			financeCategory: this.financeCategory.value,
			value: this.value.value,
			reminder: this.reminder.value,
			date: this.date.value,
			numberOfInstallments: this.numberOfInstallments.value,
			createdAt: this.createdAt.value,
			updatedAt: this.updatedAt.value
		}
	}
}
