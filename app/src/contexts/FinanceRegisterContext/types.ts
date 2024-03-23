import { ReactNode } from 'react'

import { FinanceRepository } from '@domain/billing/entity/types'

export interface FinanceRegisterProviderProps {
	children: ReactNode
}

export type FinanceRegisterData = Partial<FinanceRepository>
type FinanceRegisterContextMethods = {
	setFinanceDataOnContext: (data: FinanceRegisterData) => void
}

export type FinanceRegisterContextType = FinanceRegisterContextMethods & {
	financeRegisterData?: FinanceRegisterData // REFACTOR Separar types
}
