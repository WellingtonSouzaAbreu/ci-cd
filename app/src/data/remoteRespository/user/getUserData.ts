import { FirebaseInfraAdapter } from '@infrastructure/firebase/FirebaseInfraAdapter'
import { doc, getDoc } from 'firebase/firestore'

import { UserData } from '@domain/entities/user/types'

async function getUserData(userId: string) {
	const { firebaseFirestore } = FirebaseInfraAdapter()

	try {
		const userRef = doc(firebaseFirestore, 'users', userId)
		const userSnap = await getDoc(userRef)

		if (userSnap.exists()) {
			return { userId, ...userSnap.data() as UserData }
		}

		return null
	} catch (e) {
		console.log(e)
		return null
	}
}

export { getUserData }
