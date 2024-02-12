import { firestore, firebaseAuthentication } from './config'
import { FirebaseInfraAdapterInterface } from './FirebaseInfraAdapterInterface'

function FirebaseInfraAdapter(): FirebaseInfraAdapterInterface {
	return {
		firebaseFirestore: firestore,
		firebaseAuth: firebaseAuthentication,
	}
}

export { FirebaseInfraAdapter }
