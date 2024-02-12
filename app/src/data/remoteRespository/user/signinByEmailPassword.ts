import { firebaseAuthentication } from '@infrastructure/firebase/config'
import { UserCredential, signInWithEmailAndPassword } from 'firebase/auth'

async function signinByEmailPassword(email: string, password: string): Promise<UserCredential> {
	return signInWithEmailAndPassword(firebaseAuthentication, email, password)
}

export { signinByEmailPassword }
