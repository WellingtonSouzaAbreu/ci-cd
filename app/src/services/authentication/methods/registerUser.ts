import { FirebaseInfraAdapter } from '@infrastructure/firebase/FirebaseInfraAdapter'
import { UserCredential, createUserWithEmailAndPassword } from 'firebase/auth'

const { firebaseAuth } = FirebaseInfraAdapter()

async function registerUser(email: string, password: string): Promise<UserCredential> {
	return createUserWithEmailAndPassword(firebaseAuth, email, password)
		.then((userCredential) => userCredential)
}

export { registerUser }
