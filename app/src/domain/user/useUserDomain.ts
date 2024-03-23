import { handleMethodWithDeviceAuthenticationUC } from '@domain/user/methods/deviceAuthentication'
import { hasValidLocalUserUC } from '@domain/user/methods/hasValidLocalUserUC'
import { signinUC } from '@domain/user/methods/signinUC'
import { signupUC } from '@domain/user/methods/signupUC'
import { updateUserRepositoryUC } from '@domain/user/methods/updateUserRepositoryUC'
import { validateUserNameUC, validateEmailUC, validatePasswordUC } from '@domain/user/methods/validateUserFieldsUC'

import { UserDomainInterface } from './UserDomainInterface'

function useUserDomain(): UserDomainInterface {
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

export { useUserDomain }
