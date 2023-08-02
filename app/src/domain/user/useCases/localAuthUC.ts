import { HandleMethodWithAuthentication, handleMethodWithAuthentication } from '../rules/localAuth'

async function handleMethodWithAuthenticationUC(secureMethod: HandleMethodWithAuthentication) {
	return handleMethodWithAuthentication(secureMethod)
}

export { handleMethodWithAuthenticationUC }
