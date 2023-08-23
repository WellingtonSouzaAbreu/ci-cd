import { firestore } from '@infrastructure/firebase'
import { doc, setDoc } from 'firebase/firestore'

async function updateRemoteUser(userId: string, userData: any) { // TODO Type UserCollection, CollectionFIcara como entities
	const documentReference = doc(firestore, 'users', userId)
	return setDoc(documentReference, userData, { merge: true })
}

export { updateRemoteUser }
