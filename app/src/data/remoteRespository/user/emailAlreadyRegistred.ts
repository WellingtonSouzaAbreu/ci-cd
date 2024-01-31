import { firebaseAuth } from '@infrastructure/firebase'
import { fetchSignInMethodsForEmail } from 'firebase/auth'

async function emailAlreadyRegistred(email: string) {
	return fetchSignInMethodsForEmail(firebaseAuth, email)
		.then((signinMethods) => !!(signinMethods && signinMethods.length))
		.catch((error) => {
			console.log(error)
			return false
		})
}

export { emailAlreadyRegistred }
