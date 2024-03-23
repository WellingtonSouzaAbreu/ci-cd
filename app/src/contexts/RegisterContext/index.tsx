import React, { createContext, useMemo, useState } from 'react'

import { UserRegisterData } from '@domain/user/entity/types'

type RegisterContextMethods = {
	setUserRegisterDataOnContext: (data: UserRegisterData) => void
}

interface RegisterProviderProps {
	children: React.ReactNode
}

const initialValue = {
	userRegistrationData: {},
	setUserRegisterDataOnContext: () => null
}

type RegisterContextType = RegisterContextMethods & {
	userRegistrationData?: UserRegisterData
}

const RegisterContext = createContext<RegisterContextType>(initialValue)

function RegisterProvider({ children }: RegisterProviderProps) {
	const [userRegistrationData, setUserRegisterDataContext] = useState<UserRegisterData>()

	const setUserRegisterDataOnContext = async (data: UserRegisterData) => {
		setUserRegisterDataContext({ ...userRegistrationData, ...data })
	}

	const registerProviderData = useMemo(() => ({
		userRegistrationData,
		setUserRegisterDataOnContext,
	}), [userRegistrationData, setUserRegisterDataOnContext])

	return (
		<RegisterContext.Provider value={registerProviderData}>
			{children}
		</RegisterContext.Provider>
	)
}

export { RegisterProvider, RegisterContext }
