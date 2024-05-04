import { UnknowFunction } from '@domain/applicationTypes/types'
import { UserEntity } from '@domain/user/entity/types'

import { AuthenticationServiceInterface } from '@services/authentication/AuthenticationServiceInterface'

import { UserRepositoryInterface } from '@data/user/UserRepositoryInterface'

interface UserDomainInterface {
	userNameIsValid: (name: string) => boolean
	emailIsValid: (name: string) => boolean
	passwordIsValid: (name: string) => boolean
	hasValidLocalUser: (useUserRepository: () => UserRepositoryInterface) => Promise<boolean>

	performSignup: (userRegistrationData: UserEntity) => Promise<UserEntity>
	performSignin: (email: string, password: string, useAuthenticationService: () => AuthenticationServiceInterface, useUserRepository: () => UserRepositoryInterface) => Promise<UserEntity>
	updateUserRepository: (user: UserEntity, useUserRepository: () => UserRepositoryInterface) => Promise<void>

	handleMethodWithDeviceAuthentication: (useAuthenticationService: () => AuthenticationServiceInterface, secureMethod: UnknowFunction) => Promise<boolean>
}

export { UserDomainInterface }
