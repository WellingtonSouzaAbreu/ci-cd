import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

import { UserEntity } from '@domain/user/entity/types'

async function getUserData(userId: string) {
	const { firebaseFirestore } = useFirebaseConfig()

	try {
		const userRef = doc(firebaseFirestore, 'users', userId)
		const userSnap = await getDoc(userRef)

		if (userSnap.exists()) {
			return { userId, ...userSnap.data() as UserEntity }
		}

		return null
	} catch (error) {
		console.log(error)
		return null
	}
}

export { getUserData }
