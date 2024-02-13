import { FirebaseInfraAdapter } from '@infrastructure/firebase/FirebaseInfraAdapter'
import { doc, setDoc } from 'firebase/firestore'

import { UserData } from '@domain/entities/user/types'

const { firebaseFirestore } = FirebaseInfraAdapter()

async function updateRemoteUser(userId: string, userData: UserData) {
	const documentReference = doc(firebaseFirestore, 'users', userId)
	return setDoc(documentReference, userData, { merge: true })
}

export { updateRemoteUser }
