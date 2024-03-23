import React, { createContext, useMemo, useState } from 'react'

import { FinanceRegisterContextType, FinanceRegisterData, FinanceRegisterProviderProps } from './types'

const initialValue = {
	financeRegisterData: {},
	setFinanceDataOnContext: () => null
}

const FinanceRegisterContext = createContext<FinanceRegisterContextType>(initialValue)

function FinanceRegisterProvider({ children }: FinanceRegisterProviderProps) {
	const [financeRegisterData, setFinanceRegisterDataContext] = useState<FinanceRegisterData>()

	const setFinanceDataOnContext = async (data: FinanceRegisterData) => {
		console.log({ ...financeRegisterData, ...data })
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
