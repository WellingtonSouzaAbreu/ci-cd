import * as LocalAuthentication from 'expo-local-authentication'

import { UnknowFunction } from '@domain/applicationTypes/types'

async function handleMethodWithDeviceAuthentication(secureMethod: UnknowFunction) {
	try {
		const config = {
			cancelLabel: 'cancelLabel',
			promptMessage: 'Confirme sua identidade',
			requireConfirmation: false
		}

		const hasAuth = await LocalAuthentication.authenticateAsync(config)
		if (hasAuth.success) {
			await secureMethod()
			return true
		}

		throw new Error('Houve um erro ao realizar a autenticação com os dados locais')
	} catch (err) {
		throw new Error('Houve um erro ao realizar a autenticação com os dados locais')
	}
}

export { handleMethodWithDeviceAuthentication }
