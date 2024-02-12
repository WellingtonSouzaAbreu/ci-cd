import { UserData } from '@domain/entities/user/types'

interface UserRepositoryAdapterInterface {
	local: {
		getLocalUserData: () => Promise<UserData>,
		updateLocalUser: (userData: UserData, mergeStoragedData?: boolean) => Promise<void>
	},
	remote: {
		updateRemoteUser: (userId: string, userData: UserData) => Promise<void>
	}
}

export { UserRepositoryAdapterInterface }
