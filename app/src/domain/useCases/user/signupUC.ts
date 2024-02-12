import { createNewUser } from '@domain/entities/user'

import { UserRegistrationData } from 'src/@types/entities/user'

import { createUser } from '@data/remoteRespository/user/createUser'

async function signupUC(userRegistrationData: UserRegistrationData) {
	const userData = createNewUser(userRegistrationData)

	const { password } = userRegistrationData

	const newUser = await createUser(userData.email, password)
	if (!newUser) throw new Error('Houve um problema com o novo usuário criado!')

	return { ...userData, userId: newUser.user.uid }
}

export { signupUC }
