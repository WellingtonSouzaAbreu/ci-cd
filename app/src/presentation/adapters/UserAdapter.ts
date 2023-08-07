import { handleMethodWithAuthenticationUC } from '@domain/user/useCases/localAuthUC'
import { signupUC } from '@domain/user/useCases/signup'
import { validateUserNameUC, validateEmailUC, validatePasswordUC } from '@domain/user/useCases/validateUserFieldsUC'

import { HandleMethodWithAuthentication } from 'src/@types/entities/paramFunctions'

function userNameIsValid(name: string) {
	return validateUserNameUC(name)
}

function emailIsValid(email: string) {
	return validateEmailUC(email)
}

function passwordIsValid(password: string) {
	return validatePasswordUC(password)
}

async function performSignup(name: string, email: string, password: string) {
	return signupUC(name, email, password)
}

async function handleAuthenticatedMethod(secureMethod: HandleMethodWithAuthentication) {
	return handleMethodWithAuthenticationUC(secureMethod)
}

export {
	userNameIsValid,
	emailIsValid,
	passwordIsValid,
	performSignup,
	handleAuthenticatedMethod
}