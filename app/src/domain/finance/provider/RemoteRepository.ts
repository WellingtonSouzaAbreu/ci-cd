import { FinanceEntity, FinanceEntityOptional } from '../model/entity/types'

export interface FinanceRemoteRepositoryInterface {
	createFinance(data: FinanceEntityOptional): Promise<FinanceEntity>
}
