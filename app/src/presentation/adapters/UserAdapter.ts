import { handleMethodWithAuthenticationUC } from '@domain/user/useCases/localAuthUC'
import { signinUC } from '@domain/user/useCases/signin'
import { signupUC } from '@domain/user/useCases/signup'
import { validateUserNameUC, validateEmailUC, validatePasswordUC } from '@domain/user/useCases/validateUserFieldsUC'

import { HandleMethodWithAuthentication } from 'src/@types/entities/paramFunctions'
import { UserData } from 'src/@types/entities/user'

const UserAdapter = () => {
	return {
		userNameIsValid: (name: string) => {
			return validateUserNameUC(name)
		},

		emailIsValid: (email: string) => {
			return validateEmailUC(email)
		},

		passwordIsValid: (password: string) => {
			return validatePasswordUC(password)
		},

		performSignup: async (name: string, email: string, password: string, updateUserContext: (user: UserData) => any) => { // TODO Realizar injeção de dependência para salvar no contexto
			return signupUC(name, email, password, updateUserContext)
		},

		performSignin: async (email: string, password: string) => {
			return signinUC(email, password)
		},

		handleAuthenticatedMethod: async (secureMethod: HandleMethodWithAuthentication) => {
			return handleMethodWithAuthenticationUC(secureMethod)
		}
	}
}

export { UserAdapter }
