import React, { createContext, useContext, useMemo, useState } from 'react'

import { FinanceEntityOptional } from '@domain/finance/entity/types'

import { FinanceRegisterContextType, FinanceRegisterProviderProps } from './types'

const initialValue = {
	financeRegisterData: {},
	setFinanceDataOnContext: () => null
}

const FinanceRegisterContext = createContext<FinanceRegisterContextType>(initialValue)

function FinanceRegisterProvider({ children }: FinanceRegisterProviderProps) {
	const [financeRegisterData, setFinanceRegisterDataContext] = useState<FinanceEntityOptional>()

	const setFinanceDataOnContext = async (data: FinanceEntityOptional) => {
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

const useFinanceRegisterContext = () => useContext(FinanceRegisterContext)

export { FinanceRegisterProvider, useFinanceRegisterContext }
