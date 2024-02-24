import { UserCredential } from 'firebase/auth'

import { UnknowFunction } from '@domain/entities/limbo/types'

interface AuthenticationServiceAdapterInterface {
	handleMethodWithDeviceAuthentication: (secureMethod: UnknowFunction) => Promise<boolean>

	signupByEmailPassword: (email: string, password: string) => Promise<UserCredential>
	signinByEmailPassword: (email: string, password: string) => Promise<UserCredential>
}

export { AuthenticationServiceAdapterInterface }
