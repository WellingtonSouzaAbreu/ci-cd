import { handleMethodWithDeviceAuthenticationDM } from '@domain/user/methods/deviceAuthenticationDM'
import { hasValidLocalUserDM } from '@domain/user/methods/hasValidLocalUserDM'
import { signinDM } from '@domain/user/methods/signinDM'
import { signupDM } from '@domain/user/methods/signupDM'
import { updateUserRepositoryDM } from '@domain/user/methods/updateUserRepositoryDM'
import { validateUserNameDM, validateEmailDM, validatePasswordDM } from '@domain/user/methods/validateUserFieldsDM'

import { UserDomainInterface } from './UserDomainInterface'

function useUserDomain(): UserDomainInterface {
	return {
		userNameIsValid: validateUserNameDM,
		emailIsValid: validateEmailDM,
		passwordIsValid: validatePasswordDM,

		performSignup: signupDM,
		performSignin: signinDM,

		updateUserRepository: updateUserRepositoryDM,

		hasValidLocalUser: hasValidLocalUserDM,
		handleMethodWithDeviceAuthentication: handleMethodWithDeviceAuthenticationDM
	}
}

export { useUserDomain }
