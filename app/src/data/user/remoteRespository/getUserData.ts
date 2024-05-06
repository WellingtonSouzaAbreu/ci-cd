import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

import { UserEntity } from '@domain/user/model/entity/types'

import { remoteStorageKeys } from '@data/keys/remoteStorageKeys'

async function getUserData(userId: string) {
	const { firebaseFirestore } = useFirebaseConfig()

	try {
		const userRef = doc(firebaseFirestore, remoteStorageKeys.USER_REPOSITORY, userId)
		const userSnap = await getDoc(userRef)

		if (userSnap.exists()) {
			return { id: userSnap.id, ...userSnap.data() } as UserEntity
		}
	} catch (error) {
		console.log(error)
		return null
	}
}

export { getUserData }
