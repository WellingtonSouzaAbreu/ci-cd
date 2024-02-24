import { getLocalUserData } from '@data/localRepository/user/getLocalUserData'
import { updateLocalUser } from '@data/localRepository/user/updateLocalUser'
import { getUserData } from '@data/remoteRespository/user/getUserData'
import { updateRemoteUser } from '@data/remoteRespository/user/updateRemoteUser'

import { UserRepositoryAdapterInterface } from './UserRepositoryAdapterInterface'

function UserRepositoryAdapter(): UserRepositoryAdapterInterface {
	return {
		local: {
			getLocalUserData: getLocalUserData,
			updateLocalUser: updateLocalUser
		},
		remote: {
			getUserData: getUserData,
			updateRemoteUser: updateRemoteUser
		}
	}
}

export { UserRepositoryAdapter }
