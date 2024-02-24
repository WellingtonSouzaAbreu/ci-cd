import { AuthenticationServiceAdapterInterface } from './AuthenticationServiceAdapterInterface'
import { handleMethodWithDeviceAuthentication } from './methods/handleMethodWithDeviceAuthentication'
import { signinByEmailPassword } from './methods/signinByEmailPassword'
import { signupByEmailPassword } from './methods/signupByEmailPassword'

function AuthenticationServiceAdapter(): AuthenticationServiceAdapterInterface {
	return {
		handleMethodWithDeviceAuthentication: handleMethodWithDeviceAuthentication,
		signupByEmailPassword: signupByEmailPassword,
		signinByEmailPassword: signinByEmailPassword
	}
}

export { AuthenticationServiceAdapter }
