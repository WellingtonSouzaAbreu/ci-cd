import * as LocalAuthentication from 'expo-local-authentication'

import { HandleMethodWithAuthentication } from 'src/@types/entities/paramFunctions'

async function handleMethodWithAuthenticationUC(secureMethod: HandleMethodWithAuthentication) {
	try {
		const config = {
			cancelLabel: 'cancelLabel',
			promptMessage: 'Confirme sua identidade',
			requireConfirmation: false
		}

		const hasAuth = await LocalAuthentication.authenticateAsync(config)
		if (hasAuth.success) {
			secureMethod()
			return true
		}
		throw new Error('Houve um erro ao realizar a autenticação com os dados locais')
	} catch (err) {
		throw new Error('Houve um erro ao realizar a autenticação com os dados locais')
	}
}

export { handleMethodWithAuthenticationUC }
