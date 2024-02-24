import { UnknowFunction } from '@domain/entities/limbo/types'

import { AuthenticationServiceAdapterInterface } from '@services/authentication/AuthenticationServiceAdapterInterface'

async function handleMethodWithDeviceAuthenticationUC(secureMethod: UnknowFunction, AuthenticationServiceAdapter: () => AuthenticationServiceAdapterInterface) {
	const { handleMethodWithDeviceAuthentication } = AuthenticationServiceAdapter()
	await handleMethodWithDeviceAuthentication(secureMethod)
}

export { handleMethodWithDeviceAuthenticationUC }
