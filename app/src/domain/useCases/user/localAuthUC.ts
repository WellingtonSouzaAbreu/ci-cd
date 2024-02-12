import * as LocalAuthentication from 'expo-local-authentication'

import { HandleMethodWithAuthentication } from '@domain/entities/limbo/types'

async function handleMethodWithAuthenticationUC(secureMethod: HandleMethodWithAuthentication) {
	try { // TODO Migrar método e configs para authentication
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
