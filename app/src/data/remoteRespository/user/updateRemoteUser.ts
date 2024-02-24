import { FirebaseInfraAdapter } from '@infrastructure/firebase/FirebaseInfraAdapter'
import { doc, setDoc } from 'firebase/firestore'

import { UserData } from '@domain/entities/user/types'

async function updateRemoteUser(userId: string, userData: UserData) {
	const { firebaseFirestore } = FirebaseInfraAdapter()

	const documentReference = doc(firebaseFirestore, 'users', userId)
	return setDoc(documentReference, userData, { merge: true })
}

export { updateRemoteUser }
