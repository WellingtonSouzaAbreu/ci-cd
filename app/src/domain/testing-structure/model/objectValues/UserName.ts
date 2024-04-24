/* eslint-disable class-methods-use-this */

export class UserName {
	readonly value: string

	constructor(value: string) {
		this.value = value

		if (!this.validateUserName(value)) {
			throw new Error('Esse nome não é válido!')
		}
	}

	validateUserName(name?: string) {
		const validateValue = name || this.value

		if (!validateValue) return false

		const cleanUserName = validateValue.trim()
		if (!cleanUserName) return false

		return true
	}
}
