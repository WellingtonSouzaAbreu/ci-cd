import { Validator } from '../utils/Validator'

export class Description {
	readonly value: string
	private readonly min: number
	private readonly max: number

	constructor(
		value: string,
		min = 0,
		max = 20
	) {
		this.value = String(value).trim()
		this.min = min
		this.max = max

		const errors = Validator.stackErros(
			Validator.sizeSmallerThan(this.value, min, `A descrição deve ter no mínimo ${min} caracteres!`),
			Validator.sizeBigThan(this.value, max, `A descrição deve ter no máximo ${max} caracteres!`)
		)

		if (errors) throw new Error(errors.join(', '))
	}
}
