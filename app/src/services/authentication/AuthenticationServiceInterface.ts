import { UserCredential } from 'firebase/auth'

import { UnknowFunction } from '@domain/shared/applicationTypes/types'

interface AuthenticationServiceInterface {
	handleMethodWithDeviceAuthentication: (secureMethod: UnknowFunction) => Promise<boolean>

	signupByEmailPassword: (email: string, password: string) => Promise<UserCredential>
	signinByEmailPassword: (email: string, password: string) => Promise<UserCredential>
}

export { AuthenticationServiceInterface }
