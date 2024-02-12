import { firebaseAuth } from '@infrastructure/firebase/config'
import { UserCredential, signInWithEmailAndPassword } from 'firebase/auth'

async function signinByEmailPassword(email: string, password: string): Promise<UserCredential> {
	return signInWithEmailAndPassword(firebaseAuth, email, password)
}

export { signinByEmailPassword }
