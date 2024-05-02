import { ReactNode } from 'react'

import { FinanceEntity, FinanceEntityOptional } from '@domain/finance/model/entity/types'

export interface FinanceRegisterProviderProps {
	children: ReactNode
}

export type FinanceRegisterContextType = {
	financeRegisterData?: FinanceEntity
	setFinanceDataOnContext: (data: FinanceEntityOptional) => void
}
