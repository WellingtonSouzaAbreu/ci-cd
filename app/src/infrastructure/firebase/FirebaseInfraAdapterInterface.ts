import { Auth } from 'firebase/auth'
import { Firestore } from 'firebase/firestore'

import { documentReference, setDocument } from './methods/firestore'

interface FirebaseInfraAdapterInterface {
	firebaseFirestore: Firestore
	firebaseAuth: Auth
	docRef: typeof documentReference
	setDoc: typeof setDocument
}

export { FirebaseInfraAdapterInterface }
