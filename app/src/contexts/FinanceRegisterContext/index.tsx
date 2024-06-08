import React, { createContext, useContext, useMemo, useState } from 'react'

import { FinanceEntity, FinanceEntityOptional } from '@domain/finance/model/entity/types'

import { FinanceRegisterContextType, FinanceRegisterProviderProps } from './types'

const initialValue = {
	financeRegisterData: {} as FinanceEntityOptional,
	setFinanceDataOnContext: () => null
}

const FinanceRegisterContext = createContext<FinanceRegisterContextType>(initialValue as FinanceRegisterContextType)

function FinanceRegisterProvider({ children }: FinanceRegisterProviderProps) {
	const [financeRegisterData, setFinanceRegisterDataContext] = useState<FinanceEntity>()

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
