import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

import { UserEntity } from '@domain/user/entity/types'

async function updateRemoteUser(userId: string, userData: UserEntity) {
	const { firebaseFirestore } = useFirebaseConfig()

	const documentReference = doc(firebaseFirestore, 'users', userId)
	return setDoc(documentReference, userData, { merge: true })
}

export { updateRemoteUser }
