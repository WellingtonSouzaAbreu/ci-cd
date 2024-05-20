import { sharedErrors } from '@domain/constants/common/errorMessages'

import { Validator } from '../utils/Validator'

export class SimpleText {
	readonly value: string
	private readonly min: number
	private readonly max: number

	constructor(
		value: string,
		min = 3,
		max = 20
	) {
		this.value = String(value).trim() || ''
		this.min = min
		this.max = max

		const errors = Validator.stackErros(
			Validator.notEmpty(this.value, sharedErrors.EMPTY_TEXT),
			Validator.sizeSmallerThan(this.value, this.min, sharedErrors.SHOR_TEXT),
			Validator.sizeBigThan(this.value, this.max, sharedErrors.LARGE_TEXT)
		)

		if (errors) throw new Error(errors.join(', '))
	}
}
