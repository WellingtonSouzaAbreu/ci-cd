import { UnknowFunction } from '@domain/applicationTypes/types'

import { AuthenticationServiceInterface } from '@services/authentication/AuthenticationServiceInterface'

async function handleMethodWithDeviceAuthenticationDM(secureMethod: UnknowFunction, useAuthenticationService: () => AuthenticationServiceInterface) {
	const { handleMethodWithDeviceAuthentication } = useAuthenticationService()
	return handleMethodWithDeviceAuthentication(secureMethod)
}

export { handleMethodWithDeviceAuthenticationDM }
