import { Class } from '@domain/shared/interfaces/Class'
import { UseCase } from '@domain/shared/interfaces/UseCase'
import { Id } from '@domain/shared/valueObjects/Id'

import { UserEntity } from '../model/entity/types'

import { UserLocalRepositoryInterface } from '../provider/UserLocalRepositoryInterface'
import { UserRemoteRepositoryInterface } from '../provider/UserRemoteRepositoryInterface'

export type Input = string
type Output = Promise<UserEntity>

export class PerformQuickSignin implements UseCase<Input, Output> { // TODO Sem testes
	private remoteRepository: UserRemoteRepositoryInterface
	private localRepository: UserLocalRepositoryInterface

	constructor(UserRemoteRepository: Class<UserRemoteRepositoryInterface>, UserLocalRepository: Class<UserLocalRepositoryInterface>) {
		this.remoteRepository = new UserRemoteRepository()
		this.localRepository = new UserLocalRepository()
	}

	async exec(userId: string): Output {
		const validUserId = new Id(userId).value

		const user = await this.remoteRepository.getUserById(validUserId)
		await this.localRepository.updateLocalUser(user)
		return user
	}
}
