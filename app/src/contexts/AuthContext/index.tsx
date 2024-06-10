/* eslint-disable camelcase */
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Alert } from 'react-native'

import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'
import { env_dev, env_prod } from '@env'

import { UserUseCases } from '@domain/user/adapter/UserUseCases'
import { UserEntity } from '@domain/user/model/entity/types'

import { useAlertContext } from '@contexts/AlertContext'

import { AuthContextType, AuthenticatedUserDate, UserAuthData, UserRegisterData } from './types'
import { useAuthNavigation } from '@routes/stacks/hooks/useAuthNavigation'

import { UserLocalRepository } from '@data/user/UserLocalRespository'
import { UserRemoteRepository } from '@data/user/UserRemoteRepository'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ciEnvironment } = require('../../../app.config.ci')

// const { hasValidLocalUser } = useUserDomain()

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

const getEnvVar = () => {
	if (ciEnvironment === 'prod') {
		return env_prod
	}

	return env_dev
}

function AuthProvider({ children }: AuthProviderProps) {
	const { showContextModal } = useAlertContext()

	const [userRegistrationData, setUserRegisterDataContext] = useState<UserRegisterData>()
	const [userAuthData, setUserAuthDataContext] = useState<UserAuthData>({})
	const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUserDate>()

	const { navigateToAuthScreen, navigateToQuickLogin, navigateToHome } = useAuthNavigation()

	useEffect(() => {
		Alert.alert('vars', getEnvVar())
		const unsubscribe = firebaseAuth.onAuthStateChanged(async (user) => {
			console.log(user ? 'Usuário logado!' : 'Usuário não logado!')
			if (user /* && await hasValidLocalUser() */) {
				const { requestDevicePasswordOnAuth } = await UserUseCases.getUserPreferences(UserLocalRepository)
				console.log('requestDevicePasswordOnAuth =>', requestDevicePasswordOnAuth)

				return requestDevicePasswordOnAuth
					? navigateToQuickLogin()
					: performQuickSingin()
			}
			return navigateToAuthScreen()
		})

		return unsubscribe
	}, [])

	const performQuickSingin = async () => { // Quick signin virar um caso de uso
		try {
			const userId = firebaseAuth.currentUser.uid
			const user = await UserUseCases.performQuickSignin(UserRemoteRepository, UserLocalRepository, userId)
			setUserDataOnContext(user)
			navigateToHome()
		} catch (error) {
			console.log(error)
			showContextModal('', 'Houve um erro ao tentar recuperar suas informações!')
			navigateToAuthScreen()
		}
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
