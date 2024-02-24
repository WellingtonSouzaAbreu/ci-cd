import { UnknowFunction } from '@domain/entities/limbo/types'
import { UserData, UserRegisterData } from '@domain/entities/user/types'

import { AuthenticationServiceAdapterInterface } from '@services/authentication/AuthenticationServiceAdapterInterface'

import { UserRepositoryAdapterInterface } from '@data/user/UserRepositoryAdapterInterface'

interface UserUseCaseAdapterInterface {
	userNameIsValid: (name: string) => boolean
	emailIsValid: (name: string) => boolean
	passwordIsValid: (name: string) => boolean
	hasValidLocalUser: (UserRepositoryAdapter: () => UserRepositoryAdapterInterface) => Promise<boolean>

	performSignup: (userRegistrationData: UserRegisterData) => Promise<UserData>
	performSignin: (email: string, password: string, AuthenticationServiceAdapter: () => AuthenticationServiceAdapterInterface, UserRepositoryAdapter: () => UserRepositoryAdapterInterface) => Promise<UserData>
	updateUserRepository: (user: UserData, UserRepositoryAdapter: () => UserRepositoryAdapterInterface) => Promise<void>

	handleMethodWithDeviceAuthentication: (secureMethod: UnknowFunction, AuthenticationServiceAdapter: () => AuthenticationServiceAdapterInterface) => Promise<void>
}

export { UserUseCaseAdapterInterface }
