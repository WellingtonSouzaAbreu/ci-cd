import { UnknowFunction } from '@domain/shared/applicationTypes/types'
import { UserEntity } from '@domain/user/model/entity/types'

import { UserRegisterData } from '@contexts/AuthContext/types'

import { AuthenticationServiceInterface } from '@services/authentication/AuthenticationServiceInterface'

import { UserRepositoryInterface } from '@data/user/UserRepositoryInterface'

interface UserDomainInterface {
	hasValidLocalUser: (useUserRepository: () => UserRepositoryInterface) => Promise<boolean>

	performSignup: (userRegistrationData: UserRegisterData) => Promise<UserEntity>
	performSignin: (email: string, password: string, useAuthenticationService: () => AuthenticationServiceInterface, useUserRepository: () => UserRepositoryInterface) => Promise<UserEntity>
	updateUserRepository: (user: UserEntity, useUserRepository: () => UserRepositoryInterface) => Promise<void>

	handleMethodWithDeviceAuthentication: (useAuthenticationService: () => AuthenticationServiceInterface, secureMethod: UnknowFunction) => Promise<boolean>
}

export { UserDomainInterface }
