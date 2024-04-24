import { ReactNode } from 'react'

import { FinanceEntityOptional } from '@domain/billing/entity/types'

export interface FinanceRegisterProviderProps {
	children: ReactNode
}

type FinanceRegisterContextMethods = {
	setFinanceDataOnContext: (data: FinanceEntityOptional) => void
}

export type FinanceRegisterContextType = FinanceRegisterContextMethods & {
	financeRegisterData?: FinanceEntityOptional // REFACTOR Separar types
}
