/* eslint-disable class-methods-use-this */

export class UserName {
	readonly value: string

	constructor(value: string) {
		if (!this.validateUserName(value)) {
			throw new Error('Esse nome não é válido!')
		}

		this.value = value
	}

	validateUserName(name?: string) {
		const validateValue = name || this.value

		if (!validateValue) return false

		const cleanUserName = validateValue.trim()
		if (!cleanUserName) return false

		return true
	}
}
