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
		if (numericValue < min) throw new Error(`Deve haver no mínimo ${min} parcela!`)
		if (numericValue > max) throw new Error(`Deve haver no máximo ${max} parcelas!`) // REFACTOR Atribuir ao errorMEssages

		this.value = numericValue
		this.min = min
		this.max = max
	}

	private convertStringToNumber(value: string | number) {
		return typeof value === 'string' ? Number(value) : value
	}
}
