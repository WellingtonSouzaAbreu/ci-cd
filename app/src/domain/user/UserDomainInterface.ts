import { UnknowFunction } from '@domain/applicationTypes/types'
import { UserData, UserRegisterData } from '@domain/user/entity/types'

import { AuthenticationServiceInterface } from '@services/authentication/AuthenticationServiceInterface'

import { UserRepositoryInterface } from '@data/user/UserRepositoryInterface'

interface UserDomainInterface {
	userNameIsValid: (name: string) => boolean
	emailIsValid: (name: string) => boolean
	passwordIsValid: (name: string) => boolean
	hasValidLocalUser: (useUserRepository: () => UserRepositoryInterface) => Promise<boolean>

	performSignup: (userRegistrationData: UserRegisterData) => Promise<UserData>
	performSignin: (email: string, password: string, useAuthenticationService: () => AuthenticationServiceInterface, useUserRepository: () => UserRepositoryInterface) => Promise<UserData>
	updateUserRepository: (user: UserData, useUserRepository: () => UserRepositoryInterface) => Promise<void>

	handleMethodWithDeviceAuthentication: (secureMethod: UnknowFunction, useAuthenticationService: () => AuthenticationServiceInterface) => Promise<void>
}

export { UserDomainInterface }
