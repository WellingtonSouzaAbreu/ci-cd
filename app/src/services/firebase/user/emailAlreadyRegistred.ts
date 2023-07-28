import { fetchSignInMethodsForEmail } from 'firebase/auth'

import { firebaseAuth } from '@services/firebase'

async function emailAlreadyRegistred(email: string) {
	return fetchSignInMethodsForEmail(firebaseAuth, email)
		.then((signinMethods) => !!(signinMethods && signinMethods.length))
		.catch((error) => {
			console.log(error)
			return false
		})
}

export { emailAlreadyRegistred }
