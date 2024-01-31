import React, { createContext, useMemo, useState } from 'react'

import { UserRegistrationData } from 'src/@types/entities/user'

type RegisterContextMethods = {
	setUserRegistrationDataOnContext: (data: UserRegistrationData) => void
}

interface RegisterProviderProps {
	children: React.ReactNode
}

const initialValue = {
	userRegistrationData: {},
	setUserRegistrationDataOnContext: () => null
}

type RegisterContextType = RegisterContextMethods & {
	userRegistrationData?: UserRegistrationData
}

const RegisterContext = createContext<RegisterContextType>(initialValue)

function RegisterProvider({ children }: RegisterProviderProps) {
	const [userRegistrationData, setUserRegistrationDataContext] = useState<UserRegistrationData>()

	const setUserRegistrationDataOnContext = async (data: UserRegistrationData) => {
		setUserRegistrationDataContext({ ...userRegistrationData, ...data })
	}

	const registerProviderData = useMemo(() => ({
		userRegistrationData,
		setUserRegistrationDataOnContext,
	}), [userRegistrationData, setUserRegistrationDataOnContext])

	return (
		<RegisterContext.Provider value={registerProviderData}>
			{children}
		</RegisterContext.Provider>
	)
}

export { RegisterProvider, RegisterContext }
