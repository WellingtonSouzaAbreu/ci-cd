import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'
import { fetchSignInMethodsForEmail } from 'firebase/auth'

async function emailAlreadyRegistred(email: string) {
	const { firebaseAuth } = useFirebaseConfig()

	return fetchSignInMethodsForEmail(firebaseAuth, email)
		.then((signinMethods) => !!(signinMethods && signinMethods.length))
		.catch((error) => {
			console.log(error)
			return false
		})
}

export { emailAlreadyRegistred }
