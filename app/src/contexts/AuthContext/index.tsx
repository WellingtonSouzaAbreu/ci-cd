import React, { createContext, useContext, useEffect } from 'react'
import { Alert } from 'react-native'

import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'

import { UserEntity } from '@domain/user/model/entity/types'
import { useUserDomain } from '@domain/user/useUserDomain'

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
	// const { showContextModal } = useAlertContext()

	// const [userRegistrationData, setUserRegisterDataContext] = useState<UserRegisterData>()
	// const [userAuthData, setUserAuthDataContext] = useState<UserAuthData>({})
	// const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUserDate>()

	// const { navigateToAuthScreen, navigateToQuickLogin, navigateToHome } = useAuthNavigation()

	useEffect(() => {
		Alert.alert('Iniciou o effect')
		/* console.log('Sessão inciada!')
		const unsubscribe = firebaseAuth.onAuthStateChanged(async (user) => {
			console.log(user ? 'Usuário logado!' : 'Usuário não logado!')
			if (user && await hasValidLocalUser()) {
				const { requestDevicePasswordOnAuth } = await UserUseCases.getUserPreferences(UserLocalRepository)
				console.log('requestDevicePasswordOnAuth =>', requestDevicePasswordOnAuth)

				return requestDevicePasswordOnAuth
					? navigateToQuickLogin()
					: performQuickSingin()
			}
			return navigateToAuthScreen()
		})

		return unsubscribe */
	}, [])

	// const performQuickSingin = async () => { // Quick signin virar um caso de uso
	// 	try {
	// 		const userId = firebaseAuth.currentUser.uid
	// 		const user = await UserUseCases.performQuickSignin(UserRemoteRepository, UserLocalRepository, userId)
	// 		setUserDataOnContext(user)
	// 		navigateToHome()
	// 	} catch (error) {
	// 		console.log(error)
	// 		showContextModal('', 'Houve um erro ao tentar recuperar suas informações!')
	// 		navigateToAuthScreen()
	// 	}
	// }

	// const setUserRegisterDataOnContext = (data: UserRegisterData) => {
	// 	setUserRegisterDataContext({ ...userRegistrationData, ...data })
	// }

	// const setUserAuthDataOnContext = (data: UserAuthData) => {
	// 	setUserAuthDataContext({ ...userAuthData, ...data })
	// }

	// const setUserDataOnContext = (data: AuthenticatedUserDate) => {
	// 	setAuthenticatedUser({ ...authenticatedUser, ...data })
	// }

	// const authProviderData = useMemo(() => ({
	// 	userRegistrationData,
	// 	setUserRegisterDataOnContext,
	// 	userAuthData,
	// 	setUserAuthDataOnContext,
	// 	authenticatedUser,
	// 	setUserDataOnContext

	// }), [userRegistrationData, userAuthData, authenticatedUser])

	return (
		<AuthContext.Provider value={'' as any}>
			{children}
		</AuthContext.Provider>
	)
}

const useAuthContext = () => useContext(AuthContext)

export { AuthProvider, useAuthContext }
