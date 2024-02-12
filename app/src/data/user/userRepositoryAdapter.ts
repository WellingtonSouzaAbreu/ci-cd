import { getLocalUserData } from '@data/localRepository/user/getLocalUserData'
import { updateLocalUser } from '@data/localRepository/user/updateLocalUser'
import { createUser } from '@data/remoteRespository/user/createUser'
import { updateRemoteUser } from '@data/remoteRespository/user/updateRemoteUser'

import { UserRepositoryAdapterInterface } from './UserRepositoryAdapterInterface'

function UserRepositoryAdapter(): UserRepositoryAdapterInterface {
	return {
		local: {
			getLocalUserData,
			updateLocalUser
		},
		remote: {
			createUser,
			updateRemoteUser
		}
	}
}

export { UserRepositoryAdapter }
