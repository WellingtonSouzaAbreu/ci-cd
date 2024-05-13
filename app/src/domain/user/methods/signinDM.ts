import { AuthenticationServiceInterface } from '@services/authentication/AuthenticationServiceInterface'

import { UserRemoteRepository } from '@data/user/UserRemoteRepository'
import { UserRepositoryInterface } from '@data/user/UserRepositoryInterface'

import { UserUseCases } from '../adapter/UserUseCases'

async function signinDM(
	email: string,
	password: string,
	useAuthenticationService: () => AuthenticationServiceInterface,
	useUserRepository: () => UserRepositoryInterface
) {
	const { signinByEmailPassword } = useAuthenticationService()

	try {
		const userCredential = await signinByEmailPassword(email, password)

		const userId = userCredential.user.uid
		if (!userId) throw new Error('Identificador do usuário inválido!', { cause: 'expected' })

		const remoteUserData = await UserUseCases.getRemoteUserData(UserRemoteRepository, userId)
		if (!remoteUserData) throw new Error('Não foi possível localizar os dados do usuário!', { cause: 'expected' })

		return remoteUserData
	} catch (error) {
		if (error.cause === 'expected') throw new Error(error.message)

		switch (error.code) {
			case 'auth/user-not-found':
				throw new Error('Usuário não encontrado!')
			case 'auth/wrong-password':
				throw new Error('Senha incorreta!')
			case 'auth/too-many-requests':
				throw new Error('Foram feitas muitas tentativas de login, tente novamente mais tarde!')
			default:
				throw new Error('Houve um problema com o login, verifique sua conexão com a internet e tente novamente em alguns instantes!')
		}
	}
}

export { signinDM }
