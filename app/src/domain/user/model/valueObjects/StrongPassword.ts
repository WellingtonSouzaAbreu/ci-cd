import { errorMessages } from '@domain/constants/errorMessages'
import { Validator } from '@domain/shared/utils/Validator'

export class StrongPassword {
	readonly value: string = ''
	constructor(password = '') {
		this.value = password.trim()

		const errors = Validator.stackErros(
			Validator.notEmpty(this.value, errorMessages.EMPTY_PASSWORD),
			Validator.sizeBigThan(this.value, 12, errorMessages.LARGE_PASSWORD),
			Validator.sizeSmallerThan(this.value, 6, errorMessages.SMALL_PASSWORD),
			Validator.regex(this.value, /[A-Z]/, errorMessages.UPPERCASE_CHARACTER_PASSWORD),
			Validator.regex(this.value, /[a-z]/, errorMessages.LOWERCASE_CHARACTER_PASSWORD),
			Validator.regex(this.value, /[^A-Za-z0-9]/, errorMessages.SYMBOL_CHARACTER_PASSWORD),
		)

		if (errors) throw new Error(errors.join(', '))
	}
}
