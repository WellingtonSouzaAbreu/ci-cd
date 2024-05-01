import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

import { UserEntity } from '@domain/user/entity/types'

import { remoteStorageKeys } from '@data/keys/remoteStorageKeys'

async function updateRemoteUser(userId: string, userData: UserEntity) {
	const { firebaseFirestore } = useFirebaseConfig()

	const documentReference = doc(firebaseFirestore, remoteStorageKeys.USER_REPOSITORY, userId)
	return setDoc(documentReference, userData, { merge: true })
}

export { updateRemoteUser }
