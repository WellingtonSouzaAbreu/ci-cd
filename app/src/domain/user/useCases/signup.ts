import { createNewUser } from '@domain/entities/user'

import { updateLocalUser } from '@data/localStorage/user/updateLocalUser'
import { createUser, updateRemoteUser } from '@data/remoteStorage/gatewayAdapters/UserGatewayAdapter'

async function signupUC(name: string, email: string, password: string) {
	const userRegistrationData = createNewUser(name, email)

	const newUser = await createUser(userRegistrationData.email, password)
	if (!newUser) throw new Error('Houve um problema com o novo usuário criado!')

	const newUserId = newUser.user.uid

	await updateRemoteUser(newUserId, userRegistrationData) // data/firestore
	await updateLocalUser({ // data/localStorage // TODO Injetar a dependência de consultar os dados locais
		...userRegistrationData,
		userId: newUserId
	})

	/* await updateUserContext() */ // TODO Update UserContext
}

export { signupUC }
