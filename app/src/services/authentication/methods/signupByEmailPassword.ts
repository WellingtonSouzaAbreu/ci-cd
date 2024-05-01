import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'
import { UserCredential, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'

const { firebaseAuth } = useFirebaseConfig()

async function signupByEmailPassword(email: string, password: string): Promise<UserCredential> {
	return createUserWithEmailAndPassword(firebaseAuth, email, password)
		.then(async (userCredential) => {
			await sendEmailVerification(userCredential.user)
			return userCredential
		})
}

export { signupByEmailPassword }
