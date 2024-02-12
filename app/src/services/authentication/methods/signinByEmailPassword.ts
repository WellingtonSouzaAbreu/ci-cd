import { FirebaseInfraAdapter } from '@infrastructure/firebase/FirebaseInfraAdapter'
import { UserCredential, signInWithEmailAndPassword } from 'firebase/auth'

const { firebaseAuth } = FirebaseInfraAdapter()

async function signinByEmailPassword(email: string, password: string): Promise<UserCredential> {
	return signInWithEmailAndPassword(firebaseAuth, email, password)
}

export { signinByEmailPassword }
