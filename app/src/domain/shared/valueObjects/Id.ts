import { sharedErrors } from '@domain/constants/shared/errorMessages'

import { Validator } from '../utils/Validator'

export class Id {
	readonly value: string
	readonly new: boolean

	constructor(id: string) {
		const errors = Validator.stackErros(
			Validator.notEmpty(id, sharedErrors.INVALID_ID),
			Validator.regex(id, /[a-zA-Z0-9]/, sharedErrors.INVALID_ID)
		)

		if (errors) throw new Error(errors.join(', '))

		this.value = id
	}

	isEqual(anotherId: Id): boolean {
		return this.value === anotherId.value
	}

	isDifferent(anotherId: Id): boolean {
		return this.value !== anotherId.value
	}
}
