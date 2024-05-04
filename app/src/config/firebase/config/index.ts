import AsyncStorage from '@react-native-async-storage/async-storage'

import {
	firebaseAuthDomain,
	firebaseApiKey,
	firebaseProjectId,
	firebaseMessagingSenderId,
	firebaseAppId,
	firebaseMeasurementId
} from '@env'
import { initializeApp } from 'firebase/app'
import { getAuth, initializeAuth } from 'firebase/auth'
import { getReactNativePersistence } from 'firebase/auth/react-native'
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

initializeAuth(Firebase, { persistence: getReactNativePersistence(AsyncStorage) })

const firestore = getFirestore(Firebase)
const firebaseAuthentication = getAuth(Firebase)

export { firestore, firebaseAuthentication }
