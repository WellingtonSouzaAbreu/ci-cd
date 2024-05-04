import { CustomDate } from '../valueObjects/CustomDate'
import { Description } from '../valueObjects/Description'
import { MonetaryValue } from '../valueObjects/MonetaryValue'

export class SharedModel {
	static MonetaryValue = MonetaryValue
	static Description = Description
	static CustomDate = CustomDate
}
