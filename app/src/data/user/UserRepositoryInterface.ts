import { UserEntity, UserPreferences } from '@domain/user/model/entity/types'

interface UserRepositoryInterface {
	local: {
		getLocalUserData: () => Promise<UserEntity>,
		getUserPreferences: () => Promise<UserPreferences>
		updateLocalUser: (userData: UserEntity, mergeStoragedData: boolean, useUserRepository: () => UserRepositoryInterface) => Promise<void>
		updateUserPreferences: (userPreferences: UserPreferences) => Promise<void>
	},
	remote: {
		getUserData: (userId: string) => Promise<UserEntity | null>
		updateRemoteUser: (userId: string, userData: UserEntity) => Promise<void>
	}
}

export { UserRepositoryInterface }
