import { Class } from '@domain/shared/interfaces/Class'
import { UseCase } from '@domain/shared/interfaces/UseCase'

import { UserModel } from '../adapter/UserModel'
import { UserRemoteRepositoryInterface } from '../provider/UserRemoteRepositoryInterface'

export type Input = string
type Output = Promise<[boolean, string]>

export class CheckEmailAlreadyRegistered implements UseCase<Input, Output> {
	private localRepository: UserRemoteRepositoryInterface

	constructor(UserRemoteRepository: Class<UserRemoteRepositoryInterface>) {
		this.localRepository = new UserRemoteRepository()
	}

	async exec(email: string): Output {
		const validEmail = new UserModel.Email(email).value // REFACTOR validaçã interna

		const signinMethods = await this.localRepository.getSignInMethodsForEmail(validEmail)

		return [!!(signinMethods && signinMethods.length), validEmail]
	}
}
