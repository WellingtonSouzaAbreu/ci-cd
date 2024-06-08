import { sharedErrors } from '@domain/constants/common/errorMessages'

interface DateFirestore { nanoseconds: number, seconds: number }

export class CustomDate {
	readonly value: Date

	constructor(value: Date | string | DateFirestore, canByNull?: boolean) {
		if (canByNull) return

		if (!value) throw new Error(sharedErrors.UNDEFINED_DATA)
		if (
			!(value instanceof Date)
			&& !(this.isValidDateString(value as any))
			&& !(typeof value === 'object' && Object.keys(value).includes('seconds'))
		) throw new Error('A data está em um formato inválido!')

		const convertedDate = this.convertToDateObject(value as string)

		this.value = convertedDate as Date
	}

	private convertToDateObject(value: Date | string | DateFirestore) {
		let dateValue = value

		if (value instanceof Date) {
			dateValue = value
		}

		if (typeof value === 'string') {
			dateValue = new Date(value)
		}

		if (typeof value === 'object' && Object.keys(value).includes('seconds')) {
			dateValue = new Date((value as DateFirestore).seconds * 1000)
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
