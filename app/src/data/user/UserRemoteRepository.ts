import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'
import { fetchSignInMethodsForEmail } from 'firebase/auth'

import { UserRemoteRepositoryInterface } from '@domain/user/provider/UserRemoteRepositoryInterface'

export class UserRemoteRepository implements UserRemoteRepositoryInterface {
	async getSignInMethodsForEmail(email: string) {
		const { firebaseAuth } = useFirebaseConfig()

		return fetchSignInMethodsForEmail(firebaseAuth, email)
			.then((signinMethods) => signinMethods)
			.catch((error) => {
				console.log(error)
				return []
			})
	}
}
