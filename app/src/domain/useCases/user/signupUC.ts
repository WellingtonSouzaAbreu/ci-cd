import { createNewUser } from '@domain/entities/user'
import { UserRegisterData } from '@domain/entities/user/types'

import { AuthenticationServiceAdapter } from '@services/authentication/AuthenticationServiceAdapter'

async function signupUC(userRegistrationData: UserRegisterData) {
	const { signupByEmailPassword } = AuthenticationServiceAdapter()

	try {
		const userData = createNewUser(userRegistrationData)

		const { password } = userRegistrationData

		const newUser = await signupByEmailPassword(userData.email, password)
		if (!newUser) throw new Error('Houve um problema com o novo usuário criado!')

		return { ...userData, userId: newUser.user.uid }
	} catch (error) {
		console.log(error)
		if (error.cause === 'expected') throw new Error(error.message)

		switch (error.code) {
			case 'auth/email-already-in-use':
				throw new Error('E-mail já cadastrado!')
			case 'auth/weak-password':
				throw new Error('Senha muito fraca, tente uma senha mais forte!')
			default:
				throw new Error('Houve um problema com o novo usuário criado!')
		}
	}
}

export { signupUC }
