import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'
import { fetchSignInMethodsForEmail } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

import { UserEntity } from '@domain/user/model/entity/types'
import { UserRemoteRepositoryInterface } from '@domain/user/provider/UserRemoteRepositoryInterface'

import { remoteStorageKeys } from '@data/keys/remoteStorageKeys'

export class UserRemoteRepository implements UserRemoteRepositoryInterface {
	async getSignInMethodsForEmail(email: string) {
		const { firebaseAuth } = useFirebaseConfig()
		return fetchSignInMethodsForEmail(firebaseAuth, email)
	}

	async getUserById(userId: string) {
		const { firebaseFirestore } = useFirebaseConfig()
		const userRef = doc(firebaseFirestore, remoteStorageKeys.USER_REPOSITORY, userId)
		const userSnap = await getDoc(userRef)
		if (userSnap.exists()) {
			return { id: userSnap.id, ...userSnap.data() } as UserEntity
		}
		return null
	}

	async updateRemoteUser(userId: string, userData: UserEntity) {
		const { firebaseFirestore } = useFirebaseConfig()
		const documentReference = doc(firebaseFirestore, remoteStorageKeys.USER_REPOSITORY, userId)
		return setDoc(documentReference, userData, { merge: true })
	}
}
