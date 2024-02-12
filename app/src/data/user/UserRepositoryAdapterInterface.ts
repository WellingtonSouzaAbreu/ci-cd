import { UserCredential } from 'firebase/auth'

import { UserData } from '@domain/entities/user/types'

interface UserRepositoryAdapterInterface {
	local: {
		getLocalUserData: () => Promise<UserData>,
		updateLocalUser: (userData: UserData, mergeStoragedData?: boolean) => Promise<void>
	},
	remote: {
		createUser: (email: string, password: string) => Promise<UserCredential>
		updateRemoteUser: (userId: string, userData: UserData) => Promise<void>
	}
}

export { UserRepositoryAdapterInterface }
