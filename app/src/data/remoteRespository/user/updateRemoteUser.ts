import { firestore } from '@infrastructure/firebase'
import { doc, setDoc } from 'firebase/firestore'

import { UserData } from '@domain/entities/user/types'

async function updateRemoteUser(userId: string, userData: UserData) {
	const documentReference = doc(firestore, 'users', userId)
	return setDoc(documentReference, userData, { merge: true })
}

export { updateRemoteUser }
