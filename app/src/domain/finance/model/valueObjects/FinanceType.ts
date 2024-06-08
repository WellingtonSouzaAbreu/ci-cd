import { financeErrors } from '@domain/constants/finance/financeErrors'
import { Validator } from '@domain/shared/utils/Validator'

import { FinanceEntity } from '../entity/types'

export class FinanceType {
	readonly value: FinanceEntity['type']
	private readonly financeTypes: FinanceEntity['type'][] = ['expense', 'income']

	constructor(type: FinanceEntity['type']) {
		const financeType = type || ''

		const errors = Validator.stackErros(
			Validator.notEmpty(financeType, financeErrors.EMPTY_TYPE),
			Validator.isIncluded(this.financeTypes, financeType, financeErrors.INVALID_TYPE)
		)

		if (errors) throw new Error(errors.join(', '))

		this.value = financeType as FinanceEntity['type']
	}
}
