import { handleMethodWithDeviceAuthenticationDM } from './methods/deviceAuthenticationDM'
import { hasValidLocalUserDM } from './methods/hasValidLocalUserDM'
import { signinDM } from './methods/signinDM'
import { signupDM } from './methods/signupDM'
import { updateUserRepositoryDM } from './methods/updateUserRepositoryDM'
import { validateUserNameDM, validateEmailDM, validatePasswordDM } from './methods/validateUserFieldsDM'
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
