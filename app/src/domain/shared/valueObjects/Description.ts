export class Description {
	readonly value: string
	private readonly min: number
	private readonly max: number

	constructor(
		value: string,
		min = 0,
		max = 20
	) {
		this.value = String(value)
		this.min = min
		this.max = max

		// REFACTOR Adicionar validator
		if (this.value.length < min) throw new Error(`A descrição deve ter no mínimo ${min} caracteres!`)
		if (this.value.length > max) throw new Error(`A descrição deve ter no máximo ${max} caracteres!`)
	}
}
