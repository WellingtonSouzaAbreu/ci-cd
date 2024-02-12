import { hasValidLocalUserUC } from '@domain/useCases/user/hasValidLocalUserUC'
import { handleMethodWithAuthenticationUC } from '@domain/useCases/user/localAuthUC'
import { signinUC } from '@domain/useCases/user/signinUC'
import { signupUC } from '@domain/useCases/user/signupUC'
import { updateUserRepositoryUC } from '@domain/useCases/user/updateUserRepositoryUC'
import { validateUserNameUC, validateEmailUC, validatePasswordUC } from '@domain/useCases/user/validateUserFieldsUC'

import { UserAdapterInterface } from './UserAdapterInterface'

function UserAdapter(): UserAdapterInterface {
	return {
		userNameIsValid: validateUserNameUC,
		emailIsValid: validateEmailUC,
		passwordIsValid: validatePasswordUC,

		performSignup: signupUC,
		performSignin: signinUC,

		updateUserRepository: updateUserRepositoryUC,

		hasValidLocalUser: hasValidLocalUserUC,
		handleAuthenticatedMethod: handleMethodWithAuthenticationUC
	}
}

export { UserAdapter }
