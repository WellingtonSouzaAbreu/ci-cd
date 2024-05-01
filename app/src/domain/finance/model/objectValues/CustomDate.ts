export class CustomDate {
	readonly value: Date

	constructor(value: Date | string) {
		if (!value) throw new Error('A data não pode ser indefinida!')
		if (!(value instanceof Date) && !(this.isValidDateString(value))) throw new Error('A data está em um formato inválido!')

		const convertedDate = this.convertToDateObject(value)
		if (!(convertedDate instanceof Date)) throw new Error('Não foi possível converter a data para um formato válido!')

		this.value = convertedDate
	}

	private convertToDateObject(value: Date | string) {
		let dateValue = value

		if (value instanceof Date) {
			dateValue = value
		} else if (typeof value === 'string') {
			dateValue = new Date(value)
			if (Number.isNaN(dateValue.getTime())) {
				throw new Error('Data inválida!')
			}
		} else {
			throw new Error('Tipo de data inválido!')
		}

		return dateValue
	}

	private isValidDateString(dateString: string) {
		return /^\d{4}-\d{2}-\d{2}$/.test(dateString)
	}

	formatDateToDayMonth(increaseMonth = 0): string {
		const monthAbbreviations: string[] = [
			'jan', 'fev', 'mar', 'abr',
			'mai', 'jun', 'jul', 'ago',
			'set', 'out', 'nov', 'dez'
		]

		const day: number = this.value.getDate()
		const monthIndex: number = this.value.getMonth() + increaseMonth
		const formattedDay: string = (day < 10) ? `0${day}` : `${day}`

		const formattedMonthIndex = monthIndex % 12
		const formattedDate = `${formattedDay}/${monthAbbreviations[formattedMonthIndex]}`
		return formattedDate
	}
}
