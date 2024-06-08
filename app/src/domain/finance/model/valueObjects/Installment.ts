import { Validator } from '@domain/shared/utils/Validator'

export class Installments {
	readonly value: number
	readonly min: number
	readonly max: number

	constructor(
		value: number | string,
		min = 1,
		max = 12
	) {
		const numericValue = this.convertStringToNumber(value)

		if (typeof numericValue !== 'number' || Number.isNaN(numericValue)) throw new Error('Formato de valor inválido!')
		const errors = Validator.stackErros(
			Validator.numberSmallerThan(numericValue, min, `Deve haver no mínimo ${min} parcela!`),
			Validator.numberBigThan(numericValue, max, `Deve haver no máximo ${max} parcelas!`),
		)

		if (errors) throw new Error(errors.join(', '))

		this.value = numericValue
		this.min = min
		this.max = max
	}

	private convertStringToNumber(value: string | number) {
		return typeof value === 'string' ? Number(value) : value
	}
}
