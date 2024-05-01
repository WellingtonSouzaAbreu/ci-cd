import { CustomDate } from '../../shared/CustomDate'
import { Description } from '../../shared/Description'
import { Installments } from '../model/objectValues/Installment'
import { MonetaryValue } from '../../shared/MonetaryValue'

/* export class FinanceObjectsAdapter {
	MonetaryValue: MonetaryValue
} */

export function FinanceObjectsAdapter() { // REFACTOR Deve ser class
	return {
		MonetaryValue: MonetaryValue, // REFACTOR Migrar para share
		Description: Description,
		CustomDate: CustomDate,
		Installments: Installments
	}
}
