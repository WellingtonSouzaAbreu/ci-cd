import { createNewUser } from '@domain/entities/user'

import { updateLocalUser } from '@data/localStorage/user/updateLocalUser'
import { createUser, updateRemoteUser } from '@data/remoteStorage/gatewayAdapters/UserGatewayAdapter'

import { UserMethod, UserRegistrationData } from 'src/@types/entities/user'

async function signupUC(userRegistrationData: UserRegistrationData, updateUserContext: UserMethod) {
	const userData = createNewUser(userRegistrationData)

	const { password } = userRegistrationData

	const newUser = await createUser(userData.email, password)
	if (!newUser) throw new Error('Houve um problema com o novo usuário criado!')

	const newUserId = newUser.user.uid

	await updateRemoteUser(newUserId, userData)				// firestore

	await updateLocalUser({ 								// localStorage
		...userData,
		userId: newUserId
	})

	await updateUserContext({ 								// context
		...userData,
		userId: newUserId
	})
}

export { signupUC }
