import React, { createContext, useMemo, useState } from 'react'

import { Finance, FinanceRegisterData } from '@domain/entities/billing/types'

type FinanceRegisterContextMethods = {
	setFinanceRegisterDataOnContext: (data: Finance) => void
}

interface FinanceRegisterProviderProps {
	children: React.ReactNode
}

const initialValue = {
	financeRegisterData: {},
	setFinanceRegisterDataOnContext: () => null
}

type FinanceRegisterContextType = FinanceRegisterContextMethods & {
	financeRegisterData?: FinanceRegisterData
}

const FinanceRegisterContext = createContext<FinanceRegisterContextType>(initialValue)

function FinanceRegisterProvider({ children }: FinanceRegisterProviderProps) {
	const [financeRegisterData, setFinanceRegisterDataContext] = useState<FinanceRegisterData>()

	const setFinanceRegisterDataOnContext = async (data: FinanceRegisterData) => {
		setFinanceRegisterDataContext({ ...financeRegisterData, ...data })
	}

	const registerProviderData = useMemo(() => ({
		financeRegisterData,
		setFinanceRegisterDataOnContext,
	}), [financeRegisterData, setFinanceRegisterDataOnContext])

	return (
		<FinanceRegisterContext.Provider value={registerProviderData}>
			{children}
		</FinanceRegisterContext.Provider>
	)
}

export { FinanceRegisterProvider, FinanceRegisterContext }
