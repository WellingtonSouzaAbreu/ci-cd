import { ReactNode } from 'react'

import { FinanceEntityOptional } from '@domain/finance/model/entity/types'

export interface FinanceRegisterProviderProps {
	children: ReactNode
}

type FinanceRegisterContextMethods = {
	setFinanceDataOnContext: (data: FinanceEntityOptional) => void
}

export type FinanceRegisterContextType = FinanceRegisterContextMethods & {
	financeRegisterData?: FinanceEntityOptional // REFACTOR Separar types
}
