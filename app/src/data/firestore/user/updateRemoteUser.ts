import { firestore } from '@infrastructure/firebase'
import { doc, setDoc } from 'firebase/firestore'

async function updateRemoteUser(userId: string, userData: any) { // TODO Type UserCollection
	const documentReference = doc(firestore, 'users', userId)
	return setDoc(documentReference, userData, { merge: true })
}

export { updateRemoteUser }
