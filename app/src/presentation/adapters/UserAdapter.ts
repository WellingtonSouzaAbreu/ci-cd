import { HandleMethodWithAuthentication } from '@domain/user/rules/localAuth'
import { handleMethodWithAuthenticationUC } from '@domain/user/useCases/localAuthUC'
import { validateUserNameUC, validateEmailUC, validatePasswordUC } from '@domain/user/useCases/validateUserFieldsUC'

function userNameIsValid(name: string) {
	return validateUserNameUC(name)
}

function emailIsValid(email: string) {
	return validateEmailUC(email)
}

function passwordIsValid(password: string) {
	return validatePasswordUC(password)
}

async function handleAuthenticatedMethod(secureMethod: HandleMethodWithAuthentication) {
	return handleMethodWithAuthenticationUC(secureMethod)
}

export {
	userNameIsValid, emailIsValid, passwordIsValid, handleAuthenticatedMethod
}
