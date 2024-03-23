import { useFirebaseConfig } from '@infrastructure/firebase/useFirebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

import { UserData } from '@domain/user/entity/types'

async function updateRemoteUser(userId: string, userData: UserData) {
	const { firebaseFirestore } = useFirebaseConfig()

	const documentReference = doc(firebaseFirestore, 'users', userId)
	return setDoc(documentReference, userData, { merge: true })
}

export { updateRemoteUser }
