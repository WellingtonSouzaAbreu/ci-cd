import { handleMethodWithAuthenticationUC } from '@domain/user/useCases/localAuthUC'
import { signinUC } from '@domain/user/useCases/signin'
import { signupUC } from '@domain/user/useCases/signup'
import { validateUserNameUC, validateEmailUC, validatePasswordUC } from '@domain/user/useCases/validateUserFieldsUC'

import { HandleMethodWithAuthentication } from 'src/@types/entities/paramFunctions'

function emailIsValid(email: string) {
	return validateEmailUC(email)
}

function passwordIsValid(password: string) {
	return validatePasswordUC(password)
}

async function performSignup(name: string, email: string, password: string) { // TODO Realizar injeção de dependência para salvar no contexto
	return signupUC(name, email, password)
}

async function performSignin(email: string, password: string) {
	return signinUC(email, password)
}

async function handleAuthenticatedMethod(secureMethod: HandleMethodWithAuthentication) {
	return handleMethodWithAuthenticationUC(secureMethod)
}

const UserAdapter = () => {
	return {
		userNameIsValid: (name: string) => {
			return validateUserNameUC(name)
		}
	}
}

export {
	UserAdapter,
	emailIsValid,
	passwordIsValid,
	performSignup,
	performSignin,
	handleAuthenticatedMethod
}
