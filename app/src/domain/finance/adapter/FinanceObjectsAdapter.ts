import { CustomDate } from '../model/objectValues/CustomDate'
import { Description } from '../model/objectValues/Description'
import { MonetaryValue } from '../model/objectValues/MonetaryValue'

/* export class FinanceObjectsAdapter {
	MonetaryValue: MonetaryValue
} */

export function FinanceObjectsAdapter() { // REFACTOR Deve ser class
	return {
		MonetaryValue: MonetaryValue, // REFACTOR Migrar para share
		Description: Description,
		CustomDate: CustomDate
	}
}
