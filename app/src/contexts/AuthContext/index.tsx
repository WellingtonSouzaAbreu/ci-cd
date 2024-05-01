import React, { createContext, useContext, useMemo, useState } from 'react'

import { UserEntity } from '@domain/user/entity/types'

export type UserAuthData = {
	email?: string
	password?: string
	token?: string
}

export type UserRegisterData = {
	email?: string
	password?: string
	name?: string
}

type AuthContextType = {
	userAuthData?: UserAuthData
	setUserAuthDataOnContext: (data: UserAuthData) => void
	userRegistrationData?: UserRegisterData
	setUserRegisterDataOnContext: (data: UserRegisterData) => void
	authenticatedUser?: UserEntity
	setUserDataOnContext: (data: UserEntity) => void
}

const initialValue = {
	userAuthData: {},
	setUserAuthDataOnContext: () => null,
	userRegistrationData: {},
	setUserRegisterDataOnContext: () => null,
	authenticatedUser: {},
	setUserDataOnContext: () => null
}

interface AuthProviderProps {
	children: React.ReactNode
}

const AuthContext = createContext<AuthContextType>(initialValue)

function AuthProvider({ children }: AuthProviderProps) {
	const [userRegistrationData, setUserRegisterDataContext] = useState<UserRegisterData>()
	const [userAuthData, setUserAuthDataContext] = useState<UserAuthData>({})
	const [authenticatedUser, setAuthenticatedUser] = useState<UserEntity>()

	const setUserRegisterDataOnContext = async (data: UserRegisterData) => {
		setUserRegisterDataContext({ ...userRegistrationData, ...data })
	}

	const setUserAuthDataOnContext = async (data: UserAuthData) => {
		setUserAuthDataContext({ ...userAuthData, ...data })
	}

	const setUserDataOnContext = async (data: UserEntity) => {
		setAuthenticatedUser({ ...authenticatedUser, ...data })
	}

	const authProviderData = useMemo(() => ({
		userRegistrationData,
		setUserRegisterDataOnContext,
		userAuthData,
		setUserAuthDataOnContext,
		authenticatedUser,
		setUserDataOnContext

	}), [userRegistrationData, userAuthData, authenticatedUser])

	return (
		<AuthContext.Provider value={authProviderData}>
			{children}
		</AuthContext.Provider>
	)
}

const useAuthContext = () => useContext(AuthContext)

export { AuthProvider, useAuthContext }
