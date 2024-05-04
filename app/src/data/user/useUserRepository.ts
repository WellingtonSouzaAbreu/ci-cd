import { getUserData } from '@data/user/remoteRespository/getUserData'
import { updateRemoteUser } from '@data/user/remoteRespository/updateRemoteUser'

import { getLocalUserData } from './localRepository/getLocalUserData'
import { getUserPreferences } from './localRepository/getUserPreferences'
import { updateLocalUser } from './localRepository/updateLocalUser'
import { updateUserPreferences } from './localRepository/updateUserPreferences'
import { UserRepositoryInterface } from './UserRepositoryInterface'

function useUserRepository(): UserRepositoryInterface {
	return {
		local: {
			getLocalUserData: getLocalUserData,
			getUserPreferences: getUserPreferences,

			updateLocalUser: updateLocalUser,
			updateUserPreferences: updateUserPreferences
		},
		remote: {
			getUserData: getUserData,
			updateRemoteUser: updateRemoteUser
		}
	}
}

export { useUserRepository }
