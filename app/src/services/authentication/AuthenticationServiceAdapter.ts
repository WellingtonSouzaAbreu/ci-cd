import { AuthenticationServiceAdapterInterface } from './AuthenticationServiceAdapterInterface'
import { registerUser } from './methods/registerUser'

function AuthenticationServiceAdapter(): AuthenticationServiceAdapterInterface {
	return { registerUser }
}

export { AuthenticationServiceAdapter }
