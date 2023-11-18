import { createNewUser } from '@domain/entities/user'

import { updateLocalUser } from '@data/localStorage/user/updateLocalUser'
import { UserGatewayAdapter } from '@data/remoteStorage/gatewayAdapters/UserGatewayAdapter'

import { UserMethod, UserRegistrationData } from 'src/@types/entities/user'

async function signupUC(userRegistrationData: UserRegistrationData, updateUserContext: UserMethod) {
	const { createUser, updateRemoteUser } = UserGatewayAdapter()

	const userData = createNewUser(userRegistrationData) // TODO Implementar try catch como no signin

	const { password } = userRegistrationData

	const newUser = await createUser(userData.email, password)
	if (!newUser) throw new Error('Houve um problema com o novo usuário criado!')

	const newUserId = newUser.user.uid

	await updateRemoteUser(newUserId, userData)

	await updateLocalUser({
		...userData,
		userId: newUserId
	})

	await updateUserContext({
		...userData,
		userId: newUserId
	})
}

export { signupUC }
