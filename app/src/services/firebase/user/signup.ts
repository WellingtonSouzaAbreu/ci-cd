import { createUserWithEmailAndPassword } from 'firebase/auth'

import { firebaseAuth } from '@services/firebase'

async function performSignup(email: string, password: string) {
	await createUserWithEmailAndPassword(firebaseAuth, email, password)
		.then((userCredential) => {
			console.log(userCredential.user)
			console.log('deu bom')
			return true
		})
		.catch((error) => {
			console.log(error)
			return false
		})
}

export { performSignup }
