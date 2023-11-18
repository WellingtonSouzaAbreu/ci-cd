import { UserCredential } from 'firebase/auth'

import { UserData } from 'src/@types/entities/user'

import { createUser as createUserRepository } from '../user/createUser'
import { updateRemoteUser as updateRemoteUserRepository } from '../user/updateRemoteUser'

const UserGatewayAdapter = () => {
	return {
		createUser: async (email: string, password: string): Promise<UserCredential> => {
			return createUserRepository(email, password)
		},

		updateRemoteUser: async (userId: string, userData: UserData) => {
			return updateRemoteUserRepository(userId, userData)
		}
	}
}

export { UserGatewayAdapter }
