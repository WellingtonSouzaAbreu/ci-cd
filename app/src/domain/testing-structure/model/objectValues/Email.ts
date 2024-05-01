/* eslint-disable class-methods-use-this */
export class Email {
	readonly value: string

	constructor(value: string) {
		this.value = value

		if (!this.validateEmail()) {
			throw new Error('Esse email não é válido!')
		}
	}

	validateEmail(): boolean {
		return this.value && this.value.includes('@')
	}
}
