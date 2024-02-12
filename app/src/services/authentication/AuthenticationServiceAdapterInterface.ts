import { UserCredential } from 'firebase/auth'

interface AuthenticationServiceAdapterInterface {
	registerUser: (email: string, password: string) => Promise<UserCredential>
}

export { AuthenticationServiceAdapterInterface }
