import { UnknowFunction } from '@domain/shared/applicationTypes/types'
import { UserEntity } from '@domain/user/model/entity/types'

import { UserRegisterData } from '@contexts/AuthContext/types'

import { AuthenticationServiceInterface } from '@services/authentication/AuthenticationServiceInterface'

interface UserDomainInterface {
	hasValidLocalUser: () => Promise<boolean>

	performSignup: (userRegistrationData: UserRegisterData) => Promise<UserEntity>
	performSignin: (email: string, password: string, useAuthenticationService: () => AuthenticationServiceInterface) => Promise<UserEntity>
	updateUserRepository: (userData: UserEntity) => Promise<void>

	handleMethodWithDeviceAuthentication: (useAuthenticationService: () => AuthenticationServiceInterface, secureMethod: UnknowFunction) => Promise<boolean>
}

export { UserDomainInterface }
