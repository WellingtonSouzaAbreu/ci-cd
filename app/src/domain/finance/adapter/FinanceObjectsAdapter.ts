import { Description } from '../model/objectValues/Description'
import { MonetaryValue } from '../model/objectValues/MonetaryValue'

/* export class FinanceObjectsAdapter {
	MonetaryValue: MonetaryValue
} */

export function FinanceObjectsAdapter() { // REFACTOR Deve ser class
	return {
		MonetaryValue: MonetaryValue,
		Description: Description
	}
}
