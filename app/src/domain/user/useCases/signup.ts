import { createNewUser } from '@domain/entities/user'

import { updateLocalUser } from '@data/localStorage/user/updateLocalUser'
import { createUser, updateRemoteUser } from '@data/remoteStorage/gatewayAdapters/UserGatewayAdapter'

import { UserData } from 'src/@types/entities/user'

async function signupUC(name: string, email: string, password: string, updateUserContext: (user: UserData) => any) { // TODO import props as object
	const userRegistrationData = createNewUser(name, email)

	const newUser = await createUser(userRegistrationData.email, password)
	if (!newUser) throw new Error('Houve um problema com o novo usuário criado!')

	const newUserId = newUser.user.uid

	/* await updateRemoteUser(newUserId, userRegistrationData) // firestore
	await updateLocalUser({ 								// localStorage
		...userRegistrationData,
		userId: newUserId
	}) */

	await updateUserContext({ 								// localStorage
		...userRegistrationData,
		userId: newUserId
	}) // TODO Update UserContext
}

export { signupUC }
