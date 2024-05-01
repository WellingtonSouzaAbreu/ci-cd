import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'

import { useUserDomain } from '@domain/user/useUserDomain'

import { AuthContextType, AuthenticatedUserDate, UserAuthData, UserRegisterData } from './types'
import { useAuthNavigation } from '@routes/stacks/hooks/useAuthNavigation'

import { useUserRepository } from '@data/user/useUserRepository'

const initialValue = {
	userAuthData: {},
	setUserAuthDataOnContext: () => null,
	userRegistrationData: {},
	setUserRegisterDataOnContext: () => null,
	authenticatedUser: {},
	setUserDataOnContext: () => null,
	userIsAuthenticated: false
}

interface AuthProviderProps {
	children: React.ReactNode
}

const AuthContext = createContext<AuthContextType>(initialValue)

const { firebaseAuth } = useFirebaseConfig()

const { updateUserRepository } = useUserDomain()

function AuthProvider({ children }: AuthProviderProps) {
	const [userRegistrationData, setUserRegisterDataContext] = useState<UserRegisterData>()
	const [userAuthData, setUserAuthDataContext] = useState<UserAuthData>({})
	const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUserDate>()
	const [userIsAuthenticated, setUserIsAuthenticated] = useState(false)

	const { navigateToAuthScreen, navigateToHome } = useAuthNavigation()

	useEffect(() => {
		console.log('Sessão inciada!')
		const unsubscribe = firebaseAuth.onAuthStateChanged(async (user) => { // REFACTOR Não deve ficar aqui
			console.log(user ? 'Usuário logado!' : 'Usuário não logado!')
			if (user) {
				await performQuickSingin()
				setUserIsAuthenticated(true)
				return navigateToHome()
			}
			return navigateToAuthScreen()
		})

		return unsubscribe
	}, [])

	const performQuickSingin = async () => {
		const createdUser = firebaseAuth.currentUser.uid
		const user = { id: createdUser, name: 'Estou logado poha!' } // REFACTOR  Implementar chamada de usuário
		await updateUserRepository(user, useUserRepository)
		setUserDataOnContext(user)
	}

	const setUserRegisterDataOnContext = async (data: UserRegisterData) => {
		setUserRegisterDataContext({ ...userRegistrationData, ...data })
	}

	const setUserAuthDataOnContext = async (data: UserAuthData) => {
		setUserAuthDataContext({ ...userAuthData, ...data })
	}

	const setUserDataOnContext = async (data: AuthenticatedUserDate) => {
		setAuthenticatedUser({ ...authenticatedUser, ...data })
	}

	const authProviderData = useMemo(() => ({
		userRegistrationData,
		setUserRegisterDataOnContext,
		userAuthData,
		setUserAuthDataOnContext,
		authenticatedUser,
		setUserDataOnContext,
		userIsAuthenticated

	}), [userRegistrationData, userAuthData, authenticatedUser, userIsAuthenticated])

	return (
		<AuthContext.Provider value={authProviderData}>
			{children}
		</AuthContext.Provider>
	)
}

const useAuthContext = () => useContext(AuthContext)

export { AuthProvider, useAuthContext }
