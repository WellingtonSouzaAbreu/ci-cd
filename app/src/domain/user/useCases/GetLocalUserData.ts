import { Class } from '@domain/shared/interfaces/Class'
import { UseCase } from '@domain/shared/interfaces/UseCase'

import { UserEntity } from '../model/entity/types'

import { UserLocalRepositoryInterface } from '../provider/UserLocalRepositoryInterface'

export type Input = undefined
type Output = Promise<UserEntity | null>

export class GetLocalUserData implements UseCase<Input, Output> { // TODO Sem testes
	private localRepository: UserLocalRepositoryInterface

	constructor(UserLocalRepository: Class<UserLocalRepositoryInterface>) {
		this.localRepository = new UserLocalRepository()
	}

	async exec(): Output {
		try {
			return this.localRepository.getLocalUserData()
		} catch (error) { // TODO Adicionar try catch em todos os casos de uso
			console.log(error.message)
			throw error
		}
	}
}
