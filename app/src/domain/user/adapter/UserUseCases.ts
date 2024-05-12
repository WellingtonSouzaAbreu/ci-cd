import { Class } from '@domain/shared/interfaces/Class'

import { UserRemoteRepositoryInterface } from '../provider/UserRemoteRepositoryInterface'
import { CheckEmailAlreadyRegistered } from '../useCases/CheckEmailAlreadyRegistered'

export class UserUseCases {
	static async checkEmailAlreadyRegistered(UserRemoteRepository: Class<UserRemoteRepositoryInterface>, email: string) {
		return new CheckEmailAlreadyRegistered(UserRemoteRepository).exec(email)
	}
}
