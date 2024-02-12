import { FirebaseInfraAdapter } from '@infrastructure/firebase/FirebaseInfraAdapter'

import { UserData } from '@domain/entities/user/types'

const { firebaseFirestore, docRef, setDoc } = FirebaseInfraAdapter()

async function updateRemoteUser(userId: string, userData: UserData) {
	const documentReference = docRef(firebaseFirestore, 'users', userId)
	return setDoc(documentReference, userData, { merge: true })
}

export { updateRemoteUser }
