import { firestore } from '@infrastructure/firebase'
import { doc, setDoc } from 'firebase/firestore'

import { UserData } from 'src/@types/entities/user'

async function updateRemoteUser(userId: string, userData: UserData) {
	const documentReference = doc(firestore, 'users', userId)
	return setDoc(documentReference, userData, { merge: true })
}

export { updateRemoteUser }
