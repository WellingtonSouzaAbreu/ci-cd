import { UserData } from '@domain/user/entity/types'

interface UserRepositoryInterface {
	local: {
		getLocalUserData: () => Promise<UserData>,
		updateLocalUser: (userData: UserData, mergeStoragedData: boolean, useUserRepository: () => UserRepositoryInterface) => Promise<void>
	},
	remote: {
		getUserData: (userId: string) => Promise<UserData | null>
		updateRemoteUser: (userId: string, userData: UserData) => Promise<void>
	}
}

export { UserRepositoryInterface }
