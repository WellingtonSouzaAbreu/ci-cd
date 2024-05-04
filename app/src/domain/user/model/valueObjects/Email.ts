import { errorMessages } from '@domain/constants/errorMessages'
import { Validator } from '@domain/shared/utils/Validator'

export class Email {
	readonly value: string

	constructor(email: string) {
		this.value = email?.trim()

		const errors = Validator.stackErros(
			Validator.regex(
				this.value,
				/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
				errorMessages.INVALID_EMAIL
			)
		)

		if (errors) throw new Error(errors.join(', '))
	}

	get name(): string {
		return this.value.split('@')[0]
	}

	get domain(): string {
		return this.value.split('@')[1]
	}
}
