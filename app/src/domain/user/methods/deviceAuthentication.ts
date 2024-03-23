import { UnknowFunction } from '@domain/applicationTypes/types'

import { AuthenticationServiceInterface } from '@services/authentication/AuthenticationServiceInterface'

async function handleMethodWithDeviceAuthenticationUC(secureMethod: UnknowFunction, useAuthenticationService: () => AuthenticationServiceInterface) {
	const { handleMethodWithDeviceAuthentication } = useAuthenticationService()
	await handleMethodWithDeviceAuthentication(secureMethod)
}

export { handleMethodWithDeviceAuthenticationUC }
