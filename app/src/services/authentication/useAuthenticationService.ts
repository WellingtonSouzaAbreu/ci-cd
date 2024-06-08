import { AuthenticationServiceInterface } from './AuthenticationServiceInterface'
import { handleMethodWithDeviceAuthentication } from './methods/handleMethodWithDeviceAuthentication'
import { signinByEmailPassword } from './methods/signinByEmailPassword'
import { signupByEmailPassword } from './methods/signupByEmailPassword'

function useAuthenticationService(): AuthenticationServiceInterface {
	return {
		handleMethodWithDeviceAuthentication: handleMethodWithDeviceAuthentication,
		signupByEmailPassword: signupByEmailPassword,
		signinByEmailPassword: signinByEmailPassword
	}
}

export { useAuthenticationService }
