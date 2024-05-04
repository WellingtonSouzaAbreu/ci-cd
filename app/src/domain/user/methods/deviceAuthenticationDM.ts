import { UnknowFunction } from '@domain/applicationTypes/types'

import { AuthenticationServiceInterface } from '@services/authentication/AuthenticationServiceInterface'

async function handleMethodWithDeviceAuthenticationDM(useAuthenticationService: () => AuthenticationServiceInterface, secureMethod: UnknowFunction) {
	const { handleMethodWithDeviceAuthentication } = useAuthenticationService()
	return handleMethodWithDeviceAuthentication(secureMethod)
}

export { handleMethodWithDeviceAuthenticationDM }
