import { handleMethodWithDeviceAuthenticationUC } from '@domain/useCases/user/deviceAuthentication'
import { hasValidLocalUserUC } from '@domain/useCases/user/hasValidLocalUserUC'
import { signinUC } from '@domain/useCases/user/signinUC'
import { signupUC } from '@domain/useCases/user/signupUC'
import { updateUserRepositoryUC } from '@domain/useCases/user/updateUserRepositoryUC'
import { validateUserNameUC, validateEmailUC, validatePasswordUC } from '@domain/useCases/user/validateUserFieldsUC'

import { UserUseCaseAdapterInterface } from './UserUseCaseAdapterInterface'

function UserUseCaseAdapter(): UserUseCaseAdapterInterface {
	return {
		userNameIsValid: validateUserNameUC,
		emailIsValid: validateEmailUC,
		passwordIsValid: validatePasswordUC,

		performSignup: signupUC,
		performSignin: signinUC,

		updateUserRepository: updateUserRepositoryUC,

		hasValidLocalUser: hasValidLocalUserUC,
		handleMethodWithDeviceAuthentication: handleMethodWithDeviceAuthenticationUC
	}
}

export { UserUseCaseAdapter }
