import { signinByEmailPassword } from '@data/remoteStorage/user/signinByEmailPassword'

import { UserMethod } from 'src/@types/entities/user'

async function signinUC(email: string, password: string, updateUserContext: UserMethod) {
	try {
		const userCredential = await signinByEmailPassword(email, password)
		console.log(userCredential.user.uid)

		// await getRemoteUser() // TODO getRemoteUser
		// await updateLocalUser(userRegistrationData) // data/localStorage // TODO Update local é de outra camada

		// await updateUserContext({}) //
	} catch (err) {
		console.log(err.code)
		switch (err.code) {
			case 'auth/user-not-found':
				throw new Error('Usuário não encontrado!')
			case 'auth/wrong-password':
				throw new Error('Senha incorreta!')
			case 'auth/too-many-requests':
				throw new Error('Foram feitas muitas tentativas de login, tente novamente mais tarde!')
			default:
				throw new Error('Houve um problema com o login, tente novamente mais tarde!')
		}
	}
}

export { signinUC }
