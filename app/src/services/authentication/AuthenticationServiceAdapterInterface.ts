import { UserCredential } from 'firebase/auth'

interface AuthenticationServiceAdapterInterface {
	signupByEmailPassword: (email: string, password: string) => Promise<UserCredential>
	signinByEmailPassword: (email: string, password: string) => Promise<UserCredential>
}

export { AuthenticationServiceAdapterInterface }
