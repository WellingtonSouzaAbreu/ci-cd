import { errorMessages } from '@domain/constants/errorMessages'
import { Validator } from '@domain/shared/utils/Validator'

export class UserName {
	readonly value: string

	constructor(name?: string) {
		this.value = name?.trim() || ''

		const errors = Validator.stackErros(
			Validator.notEmpty(this.value, errorMessages.EMPTY_NAME),
			Validator.sizeSmallerThan(this.value, 3, errorMessages.SMALL_NAME),
			Validator.sizeBigThan(this.value, 30, errorMessages.LARGE_NAME),
			Validator.notEmpty(this.value.split(' ')[1], errorMessages.SINGLE_NAME),
			Validator.regex(this.value, /^[a-zA-ZÁ-ú'-\.\s]+$/, errorMessages.NAME_INVALID_CHARACTERS),
		)

		if (errors) throw new Error(errors.join(', '))
	}

	get firstName(): string {
		return this.value.split(' ')[0]
	}

	get lastName(): string {
		return this.value.split(' ').pop() as string
	}
}
