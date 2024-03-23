import { FirebaseInfraAdapter } from '@infrastructure/firebase/FirebaseInfraAdapter'
import { fetchSignInMethodsForEmail } from 'firebase/auth'

async function emailAlreadyRegistred(email: string) {
	const { firebaseAuth } = FirebaseInfraAdapter()

	return fetchSignInMethodsForEmail(firebaseAuth, email)
		.then((signinMethods) => !!(signinMethods && signinMethods.length))
		.catch((error) => {
			console.log(error)
			return false
		})
}

export { emailAlreadyRegistred }
