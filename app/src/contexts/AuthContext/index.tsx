import React, { createContext, useContext } from 'react'

import { UserEntity } from '@domain/user/model/entity/types'

import { AuthContextType } from './types'

const initialValue = {
	userAuthData: {},
	setUserAuthDataOnContext: () => null,
	userRegistrationData: {},
	setUserRegisterDataOnContext: () => null,
	authenticatedUser: {} as UserEntity,
	setUserDataOnContext: () => null,
}

interface AuthProviderProps {
	children: React.ReactNode
}

const AuthContext = createContext<AuthContextType>(initialValue)

function AuthProvider({ children }: AuthProviderProps) {
	return (
		<AuthContext.Provider value={'' as any}>
			{children}
		</AuthContext.Provider>
	)
}

const useAuthContext = () => useContext(AuthContext)

export { AuthProvider, useAuthContext }
