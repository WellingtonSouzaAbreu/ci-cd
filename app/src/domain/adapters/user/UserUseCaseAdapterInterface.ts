import { UserData, UserMethod, UserRegistrationData } from '@domain/entities/user/types'

import { UserRepositoryAdapterInterface } from '@data/user/UserRepositoryAdapterInterface'

interface UserUseCaseAdapterInterface {
	userNameIsValid: (name: string) => boolean
	emailIsValid: (name: string) => boolean
	passwordIsValid: (name: string) => boolean
	hasValidLocalUser: (UserRepositoryAdapter: () => UserRepositoryAdapterInterface) => Promise<boolean>

	performSignup: (userRegistrationData: UserRegistrationData) => Promise<UserData>
	performSignin: (email: string, password: string, updateUserContext: UserMethod) => Promise<void>
	updateUserRepository: (user: UserData, UserRepositoryAdapter: () => UserRepositoryAdapterInterface) => Promise<void>

	handleAuthenticatedMethod: (secureMethod: any) => Promise<any>
}

export { UserUseCaseAdapterInterface }
