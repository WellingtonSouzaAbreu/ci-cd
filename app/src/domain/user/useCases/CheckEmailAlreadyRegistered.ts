import { Class } from '@domain/shared/interfaces/Class'
import { UseCase } from '@domain/shared/interfaces/UseCase'

import { Email } from '../model/valueObjects/Email'
import { UserRemoteRepositoryInterface } from '../provider/UserRemoteRepositoryInterface'

export type Input = string
type Output = Promise<[boolean, string]>

export class CheckEmailAlreadyRegistered implements UseCase<Input, Output> { // TODO Sem testes
	private remoteRepository: UserRemoteRepositoryInterface

	constructor(UserRemoteRepository: Class<UserRemoteRepositoryInterface>) {
		this.remoteRepository = new UserRemoteRepository()
	}

	async exec(email: string): Output {
		const validEmail = new Email(email).value

		const signinMethods = await this.remoteRepository.getSignInMethodsForEmail(validEmail)

		return [!!(signinMethods && signinMethods.length), validEmail]
	}
}
