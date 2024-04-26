export class Description {
	readonly value: string
	private readonly min: number
	private readonly max: number

	constructor(
		value: string,
		min = 0,
		max = 20
	) {
		const stringValue = String(value)

		if (stringValue.length < min) throw new Error(`A descrição deve ter no mínimo ${min} caracteres!`)
		if (stringValue.length > max) throw new Error(`A descrição deve ter no máximo ${max} caracteres!`)

		this.value = stringValue
		this.min = min
		this.max = max
	}
}
