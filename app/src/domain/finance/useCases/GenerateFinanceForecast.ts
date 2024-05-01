import { UseCase } from '@domain/shared/interfaces/UseCase'

import { CustomDate } from '../model/objectValues/CustomDate'
import { MonetaryValue } from '../model/objectValues/MonetaryValue'

export interface Input {
	date: Date
	value: number | string
	numberOfInstallments: number
}

interface Output {
	date: string
	amount: string
}

export class GenerateFinanceForecast implements UseCase<Input, Output[]> {
	exec(props: Input): Output[] {
		return [...Array(props.numberOfInstallments).keys()].map((_, index) => {
			return {
				date: new CustomDate(props.date).formatDateToDayMonth(index),
				amount: new MonetaryValue(props.value).format()
			} as Output
		})
	}
}
