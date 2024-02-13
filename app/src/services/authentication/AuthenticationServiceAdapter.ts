import { AuthenticationServiceAdapterInterface } from './AuthenticationServiceAdapterInterface'
import { signinByEmailPassword } from './methods/signinByEmailPassword'
import { signupByEmailPassword } from './methods/signupByEmailPassword'

function AuthenticationServiceAdapter(): AuthenticationServiceAdapterInterface {
	return {
		signupByEmailPassword: signupByEmailPassword,
		signinByEmailPassword: signinByEmailPassword
	}
}

export { AuthenticationServiceAdapter }
