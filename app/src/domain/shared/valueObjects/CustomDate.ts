import { sharedErrors } from '@domain/constants/common/errorMessages'

export class CustomDate {
	readonly value: Date

	constructor(value: Date | string) {
		if (!value) throw new Error(sharedErrors.UNDEFINED_DATA)
		if (!(value instanceof Date) && !(this.isValidDateString(value))) throw new Error('A data está em um formato inválido!')

		const convertedDate = this.convertToDateObject(value)

		this.value = convertedDate as Date
	}

	private convertToDateObject(value: Date | string) {
		let dateValue = value

		if (value instanceof Date) {
			dateValue = value
		}

		if (typeof value === 'string') {
			dateValue = new Date(value)
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

		const day: number = this.value.getUTCDate()
		const monthIndex: number = this.value.getUTCMonth() + increaseMonth
		const formattedDay: string = (day < 10) ? `0${day}` : `${day}`

		const formattedMonthIndex = monthIndex % 12
		const formattedDate = `${formattedDay}/${monthAbbreviations[formattedMonthIndex]}`
		return formattedDate
	}
}
