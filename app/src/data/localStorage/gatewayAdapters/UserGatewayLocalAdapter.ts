import { getLocalUserData } from '../user/getLocalUserData'
import { hasValidLocalUser } from '../user/hasValidLocalUser'
import { updateLocalUser } from '../user/updateLocalUser'

function UserGatewayLocalAdapter() {
	return {
		getLocalUserData,
		hasValidLocalUser: () => hasValidLocalUser(getLocalUserData),
		updateLocalUser
	}
}

export { UserGatewayLocalAdapter }
