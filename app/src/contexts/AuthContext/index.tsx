import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'

import { UserEntity } from '@domain/user/entity/types'
import { useUserDomain } from '@domain/user/useUserDomain'

import { AuthContextType, AuthenticatedUserDate, UserAuthData, UserRegisterData } from './types'
import { useAuthNavigation } from '@routes/stacks/hooks/useAuthNavigation'

import { getUserPreferences } from '@data/user/localRepository/getUserPreferences'
import { useUserRepository } from '@data/user/useUserRepository'

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

const { firebaseAuth } = useFirebaseConfig()

const { updateUserRepository } = useUserDomain()

function AuthProvider({ children }: AuthProviderProps) {
	const [userRegistrationData, setUserRegisterDataContext] = useState<UserRegisterData>()
	const [userAuthData, setUserAuthDataContext] = useState<UserAuthData>({})
	const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUserDate>()

	const { navigateToAuthScreen, navigateToQuickLogin, navigateToHome } = useAuthNavigation()

	useEffect(() => {
		console.log('Sessão inciada!')
		const unsubscribe = firebaseAuth.onAuthStateChanged(async (user) => {
			console.log(user ? 'Usuário logado!' : 'Usuário não logado!')
			if (user) {
				const { requestDevicePasswordOnAuth } = await getUserPreferences() // REFACTOR Chamaar domain
				console.log(requestDevicePasswordOnAuth)

				return requestDevicePasswordOnAuth
					? navigateToQuickLogin()
					: performQuickSingin()
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
		navigateToHome()
	}

	const setUserRegisterDataOnContext = (data: UserRegisterData) => {
		setUserRegisterDataContext({ ...userRegistrationData, ...data })
	}

	const setUserAuthDataOnContext = (data: UserAuthData) => {
		setUserAuthDataContext({ ...userAuthData, ...data })
	}

	const setUserDataOnContext = (data: AuthenticatedUserDate) => {
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
