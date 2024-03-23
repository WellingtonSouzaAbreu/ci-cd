import { useFirebaseConfig } from '@infrastructure/firebase/useFirebaseConfig'
import { UserCredential, signInWithEmailAndPassword } from 'firebase/auth'

const { firebaseAuth } = useFirebaseConfig()

async function signinByEmailPassword(email: string, password: string): Promise<UserCredential> {
	return signInWithEmailAndPassword(firebaseAuth, email, password)
}

export { signinByEmailPassword }
