import * as LocalAuthentication from 'expo-local-authentication'

import { HandleMethodWithAuthentication } from 'src/@types/entities/paramFunctions'

async function handleMethodWithAuthenticationUC(secureMethod: HandleMethodWithAuthentication) {
	const config = {
		cancelLabel: 'cancelLabel',
		promptMessage: 'Confirme sua identidade',
		requireConfirmation: false
	}

	const hasAuth = await LocalAuthentication.authenticateAsync(config)
	if (hasAuth.success) {
		secureMethod()
	} else {
		throw new Error('Authentication failed')
	}
}

export { handleMethodWithAuthenticationUC }
