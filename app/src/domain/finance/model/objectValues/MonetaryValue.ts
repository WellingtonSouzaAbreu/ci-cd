export class MonetaryValue {
	readonly value: number

	constructor(value: string) {
		const numericValue = this.convertToFloat(value)

		if (Number.isNaN(numericValue)) throw new Error('O valor deve ser um número válido!')
		if (!Number.isFinite(numericValue)) throw new Error('O valor deve ser um número finito!')
		if (numericValue <= 0) throw new Error('O valor não pode ser negativo e nem nulo!')

		if ((value.match(/[.,]/g) || []).length > 1) {
			throw new Error('O valor deve conter no máximo um ponto ou vírgula!')
		}

		this.value = numericValue
	}

	private convertToFloat(value: string): number {
		return parseFloat(parseFloat(value).toFixed(2))
	}

	format(): string {
		return this.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
	}
}
