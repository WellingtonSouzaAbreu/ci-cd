/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-default-export */
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

import {
	firebaseAuthDomain,
	firebaseApiKey,
	firebaseProjectId,
	firebaseMessagingSenderId,
	firebaseAppId,
	firebaseMeasurementId
} from '@env'

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
const firebaseAuth = getAuth(Firebase)

export { firestore, firebaseAuth }
