import { getLocalUserData } from '@data/localRepository/user/getLocalUserData'
import { updateLocalUser } from '@data/localRepository/user/updateLocalUser'
import { getUserData } from '@data/user/remoteRespository/getUserData'
import { updateRemoteUser } from '@data/user/remoteRespository/updateRemoteUser'

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
