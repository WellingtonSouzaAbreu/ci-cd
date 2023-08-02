import { sendSignInLinkToEmail } from 'firebase/auth'

import { firebaseAuth } from '@services/firebase'

const actionCodeSettings = { url: 'https://www.google.com', }

async function signinByEmailLink(email: string) {
	await sendSignInLinkToEmail(firebaseAuth, email, actionCodeSettings)
		.then((userCredential) => {
			console.log(userCredential)
			console.log('deu bom')
			return true
		})
		.catch((error) => {
			console.log(error)
			return false
		})
}

export { signinByEmailLink }
