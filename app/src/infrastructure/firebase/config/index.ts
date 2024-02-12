import {
	firebaseAuthDomain,
	firebaseApiKey,
	firebaseProjectId,
	firebaseMessagingSenderId,
	firebaseAppId,
	firebaseMeasurementId
} from '@env'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	authDomain: firebaseAuthDomain,
	apiKey: firebaseApiKey,
	projectId: firebaseProjectId,
	messagingSenderId: firebaseMessagingSenderId,
	appId: firebaseAppId,
	measurementId: firebaseMeasurementId
}

const Firebase = initializeApp(firebaseConfig)

const firestore = getFirestore(Firebase)
const firebaseAuthentication = getAuth(Firebase)

export { firestore, firebaseAuthentication }
