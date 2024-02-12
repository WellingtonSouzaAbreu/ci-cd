import { createNewUser } from '@domain/entities/user'
import { UserRegistrationData } from '@domain/entities/user/types'

import { AuthenticationServiceAdapter } from '@services/authentication/AuthenticationServiceAdapter'

async function signupUC(userRegistrationData: UserRegistrationData) {
	const { registerUser } = AuthenticationServiceAdapter()

	try {
		const userData = createNewUser(userRegistrationData)

		const { password } = userRegistrationData

		const newUser = await registerUser(userData.email, password)
		if (!newUser) throw new Error('Houve um problema com o novo usuário criado!')

		return { ...userData, userId: newUser.user.uid }
	} catch (err) {
		throw new Error('Houve um problema com o novo usuário criado!')
	}
}

export { signupUC }
