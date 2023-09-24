import { UserCredential } from 'firebase/auth'

import { UserData } from 'src/@types/entities/user'

import { createUser as createUserRepository } from '../user/createUser'
import { updateRemoteUser as updateRemoteUserRepository } from '../user/updateRemoteUser'

async function createUser(email: string, password: string): Promise<UserCredential> {
	return createUserRepository(email, password)
}

async function updateRemoteUser(userId: string, userData: UserData) {
	return updateRemoteUserRepository(userId, userData)
}

export { createUser, updateRemoteUser }
