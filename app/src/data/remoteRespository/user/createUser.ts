import { firebaseAuth } from '@infrastructure/firebase/config'
import { UserCredential, createUserWithEmailAndPassword } from 'firebase/auth'

async function createUser(email: string, password: string): Promise<UserCredential> {
	return createUserWithEmailAndPassword(firebaseAuth, email, password)
		.then((userCredential) => userCredential)
}

export { createUser }
