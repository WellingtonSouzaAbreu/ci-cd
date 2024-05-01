import { getUserData } from '@data/user/remoteRespository/getUserData'
import { updateRemoteUser } from '@data/user/remoteRespository/updateRemoteUser'

import { getLocalUserData } from './localRepository/getLocalUserData'
import { updateLocalUser } from './localRepository/updateLocalUser'
import { UserRepositoryInterface } from './UserRepositoryInterface'

function useUserRepository(): UserRepositoryInterface {
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

export { useUserRepository }
