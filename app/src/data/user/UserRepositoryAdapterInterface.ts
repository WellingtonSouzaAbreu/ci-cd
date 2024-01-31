import { UserCredential } from 'firebase/auth'

import { UserData } from 'src/@types/entities/user'

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
