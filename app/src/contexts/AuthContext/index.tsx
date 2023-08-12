import React, { createContext, useMemo, useState } from 'react'

import { UserAuthData } from 'src/@types/entities/user'

type AuthContextMethods = {
	setUserAuthDataOnContext: (data: UserAuthData) => void
}

interface AuthProviderProps {
	children: React.ReactNode
}

const initialValue = {
	userAuth: {
		email: '',
		token: ''
	},
	setUserAuthDataOnContext: () => null
}

type AuthContextType = AuthContextMethods & {
	userAuthData?: UserAuthData
}

const AuthContext = createContext<AuthContextType>(initialValue)

function AuthProvider({ children }: AuthProviderProps) {
	const [userAuthData, setUserAuthDataContext] = useState<UserAuthData>()

	const setUserAuthDataOnContext = async (data: UserAuthData) => {
		setUserAuthDataContext({
			...userAuthData,
			...data
		})
	}

	const authProviderData = useMemo(() => ({
		userAuthData,
		setUserAuthDataOnContext,
	}), [userAuthData])

	return (
		<AuthContext.Provider value={authProviderData}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthProvider, AuthContext }
