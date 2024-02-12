import { firestore, firebaseAuthentication } from './config'
import { FirebaseInfraAdapterInterface } from './FirebaseInfraAdapterInterface'
import { documentReference, setDocument } from './methods/firestore'

function FirebaseInfraAdapter(): FirebaseInfraAdapterInterface {
	return {
		firebaseFirestore: firestore,
		firebaseAuth: firebaseAuthentication,
		docRef: documentReference,
		setDoc: setDocument
	}
}

export { FirebaseInfraAdapter }
