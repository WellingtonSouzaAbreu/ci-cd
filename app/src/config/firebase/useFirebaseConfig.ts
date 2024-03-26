import { firestore, firebaseAuthentication } from './config'
import { FirebaseConfigInterface } from './FirebaseConfigInterface'

function useFirebaseConfig(): FirebaseConfigInterface {
	return {
		firebaseFirestore: firestore,
		firebaseAuth: firebaseAuthentication,
	}
}

export { useFirebaseConfig }
