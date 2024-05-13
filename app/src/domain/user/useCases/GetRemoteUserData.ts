import { Class } from '@domain/shared/interfaces/Class'
import { UseCase } from '@domain/shared/interfaces/UseCase'
import { Id } from '@domain/shared/valueObjects/Id'

import { UserEntity } from '../model/entity/types'

import { UserRemoteRepositoryInterface } from '../provider/UserRemoteRepositoryInterface'

export type Input = string
type Output = Promise<UserEntity | null>

export class GetRemoteUserData implements UseCase<Input, Output> { // TODO Sem testes
	private remoteRepository: UserRemoteRepositoryInterface

	constructor(UserRemoteRepository: Class<UserRemoteRepositoryInterface>) {
		this.remoteRepository = new UserRemoteRepository()
	}

	async exec(userId: string): Output {
		const validId = new Id(userId).value
		return this.remoteRepository.getUserById(validId)
	}
}
