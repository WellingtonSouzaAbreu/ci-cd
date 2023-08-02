import * as LocalAuthentication from 'expo-local-authentication'

export type HandleMethodWithAuthentication = any

async function handleMethodWithAuthentication(secureMethod: HandleMethodWithAuthentication) {
	/* const handleLocalAuthentication = async () => {
		try {
			await handleActionWithAuthentication(loggar)
		} catch (err) {
			console.log(err)
		}
	} */

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

export { handleMethodWithAuthentication }
