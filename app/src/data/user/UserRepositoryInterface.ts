import { UserEntity } from '@domain/user/entity/types'

interface UserRepositoryInterface {
	local: {
		getLocalUserData: () => Promise<UserEntity>,
		updateLocalUser: (userData: UserEntity, mergeStoragedData: boolean, useUserRepository: () => UserRepositoryInterface) => Promise<void>
	},
	remote: {
		getUserData: (userId: string) => Promise<UserEntity | null>
		updateRemoteUser: (userId: string, userData: UserEntity) => Promise<void>
	}
}

export { UserRepositoryInterface }
