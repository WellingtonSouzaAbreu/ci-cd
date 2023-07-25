import React, { createContext, useMemo, useState } from 'react'

type UserRegistrationData = {
	email?: string
	password?: string
	name?: string
}

type UserAuthData = {
	token: string
}

type RegisterContextMethods = {
	setUserRegistrationDataOnContext: (data: UserRegistrationData) => void
	setUserAuthDataOnContext: (data: UserAuthData) => void
}

interface RegisterProviderProps {
	children: React.ReactNode
}

const initialValue = {
	userData: {
		email: '',
		password: '',
		name: ''
	},
	userAuth: { token: '' },
	setUserRegistrationDataOnContext: () => null,
	setUserAuthDataOnContext: () => null
}

type RegisterContextType = RegisterContextMethods & {
	userData?: UserRegistrationData
	userAuth?: UserAuthData
}

const RegisterContext = createContext<RegisterContextType>(initialValue)

function RegisterProvider({ children }: RegisterProviderProps) {
	const [userRegistrationData, setUserRegistrationDataContext] = useState<UserRegistrationData>()
	const [registerAuthData, setUserAuthDataContext] = useState<UserAuthData>()

	const setUserRegistrationDataOnContext = async (data: UserRegistrationData) => {
		setUserRegistrationDataContext({
			...userRegistrationData,
			...data
		})
	}
	const setUserAuthDataOnContext = async (data: UserAuthData) => {
		setUserAuthDataContext({
			...registerAuthData,
			...data
		})
	}

	const registerProviderData = useMemo(() => ({
		userData: userRegistrationData,
		userAuth: registerAuthData,
		setUserRegistrationDataOnContext,
		setUserAuthDataOnContext,
	}), [userRegistrationData, registerAuthData])

	return (
		<RegisterContext.Provider value={registerProviderData}>
			{children}
		</RegisterContext.Provider>
	)
}

export { RegisterProvider, RegisterContext }
