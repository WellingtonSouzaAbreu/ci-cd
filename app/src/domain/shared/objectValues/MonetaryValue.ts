export class MonetaryValue {
	readonly value: number

	constructor(value: string | number) {
		this.value = typeof value === 'string' ? this.convertToFloat(value) : value

		if (Number.isNaN(this.value)) throw new Error('O valor deve ser um número válido!')
		if (!Number.isFinite(this.value)) throw new Error('O valor deve ser um número finito!')
		if (this.value <= 0) throw new Error('O valor não pode ser negativo e nem nulo!')

		if (((typeof value === 'string' && value.match(/[.,]/g)) || []).length > 1) {
			throw new Error('O valor deve conter no máximo um ponto ou vírgula!')
		}
	}

	private convertToFloat(value: string): number {
		return parseFloat(parseFloat(value).toFixed(2))
	}

	format(): string {
		return this.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
	}
}
