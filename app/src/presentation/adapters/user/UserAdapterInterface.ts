import { UserData, UserMethod, UserRegistrationData } from 'src/@types/entities/user'

import { UserRepositoryAdapterInterface } from '@data/user/UserRepositoryAdapterInterface'

interface UserAdapterInterface {
	userNameIsValid: (name: string) => boolean
	emailIsValid: (name: string) => boolean
	passwordIsValid: (name: string) => boolean
	hasValidLocalUser: (userRepositoryAdapter: () => UserRepositoryAdapterInterface) => Promise<boolean>

	performSignup: (userRegistrationData: UserRegistrationData) => Promise<UserData>
	performSignin: (email: string, password: string, updateUserContext: UserMethod) => Promise<void>
	updateUserRepository: (user: UserData, userRepositoryAdapter: () => UserRepositoryAdapterInterface) => Promise<void>

	handleAuthenticatedMethod: (secureMethod: any) => Promise<any>
}

export { UserAdapterInterface }
