import { userErrors } from '@domain/constants/user/userErrors'
import { Validator } from '@domain/shared/utils/Validator'

export class StrongPassword {
	readonly value: string = ''
	constructor(password = '') {
		this.value = password.trim() // TODO Não permitir que o nome esteja na senha

		const errors = Validator.stackErros(
			Validator.notEmpty(this.value, userErrors.EMPTY_PASSWORD),
			Validator.sizeBigThan(this.value, 12, userErrors.LARGE_PASSWORD),
			Validator.sizeSmallerThan(this.value, 6, userErrors.SMALL_PASSWORD),
			Validator.regex(this.value, /[A-Z]/, userErrors.UPPERCASE_CHARACTER_PASSWORD),
			Validator.regex(this.value, /[a-z]/, userErrors.LOWERCASE_CHARACTER_PASSWORD),
			Validator.regex(this.value, /[^A-Za-z0-9]/, userErrors.SYMBOL_CHARACTER_PASSWORD),
		)

		if (errors) throw new Error(errors.join(', '))
	}
}
