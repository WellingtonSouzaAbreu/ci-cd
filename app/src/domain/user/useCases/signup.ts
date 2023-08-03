import { createNewUser } from '@domain/entities/user'

import { createUser } from '@data/firestore/user/createUser'
import { updateRemoteUser } from '@data/firestore/user/updateRemoteUser'
import { updateLocalUser } from '@data/localStorage/user/updateLocalUser'

async function signupUC(name: string, email: string, password: string) {
	const userRegistrationData = createNewUser(name, email, password)

	const newUser = await createUser(userRegistrationData.email, userRegistrationData.password)
	if (!newUser) throw new Error('Houve um problema com o novo usuário criado!')

	const newUserId = newUser.user.uid

	await updateRemoteUser(newUserId, userRegistrationData) // data/firestore
	await updateLocalUser({ // data/localStorage
		...userRegistrationData,
		userId: newUserId
	})

	/* await updateUserContext() */
}

export { signupUC }
