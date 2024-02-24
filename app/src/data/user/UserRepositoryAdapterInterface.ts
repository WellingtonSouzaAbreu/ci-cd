import { UserData } from '@domain/entities/user/types'

interface UserRepositoryAdapterInterface {
	local: {
		getLocalUserData: () => Promise<UserData>,
		updateLocalUser: (userData: UserData, mergeStoragedData: boolean, UserRepositoryAdapter: () => UserRepositoryAdapterInterface) => Promise<void>
	},
	remote: {
		getUserData: (userId: string) => Promise<UserData | null>
		updateRemoteUser: (userId: string, userData: UserData) => Promise<void>
	}
}

export { UserRepositoryAdapterInterface }
