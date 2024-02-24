import React, { createContext, useMemo, useState } from 'react'

import { Finance, FinanceRegisterData } from '@domain/entities/billing/types'

type FinanceRegisterContextMethods = {
	setFinanceDataOnContext: (data: Finance) => void
}

interface FinanceRegisterProviderProps {
	children: React.ReactNode
}

const initialValue = {
	financeRegisterData: {},
	setFinanceDataOnContext: () => null
}

type FinanceRegisterContextType = FinanceRegisterContextMethods & {
	financeRegisterData?: FinanceRegisterData
}

const FinanceRegisterContext = createContext<FinanceRegisterContextType>(initialValue)

function FinanceRegisterProvider({ children }: FinanceRegisterProviderProps) {
	const [financeRegisterData, setFinanceRegisterDataContext] = useState<FinanceRegisterData>()

	const setFinanceDataOnContext = async (data: FinanceRegisterData) => {
		setFinanceRegisterDataContext({ ...financeRegisterData, ...data })
	}

	const registerProviderData = useMemo(() => ({
		financeRegisterData,
		setFinanceDataOnContext,
	}), [financeRegisterData, setFinanceDataOnContext])

	return (
		<FinanceRegisterContext.Provider value={registerProviderData}>
			{children}
		</FinanceRegisterContext.Provider>
	)
}

export { FinanceRegisterProvider, FinanceRegisterContext }
