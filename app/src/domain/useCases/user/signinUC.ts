import { AuthenticationServiceAdapter } from '@services/authentication/AuthenticationServiceAdapter'

async function signinUC(email: string, password: string) {
	const { signinByEmailPassword } = AuthenticationServiceAdapter()

	try {
		const userCredential = await signinByEmailPassword(email, password)
		console.log(userCredential.user.uid)

		// const remoteUserData = await getRemoteUser()  // TODO Implementar método para obter usuário remoto
		// await updateLocalUser(userRegistrationData) // TODO Chamar método para atualizar o usuário local
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
				throw new Error('Houve um problema com o login, verifique sua conexão com a internet e tente novamente em alguns instantes!')
		}
	}
}

export { signinUC }
