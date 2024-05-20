import { Class } from '@domain/shared/interfaces/Class'
import { UseCase } from '@domain/shared/interfaces/UseCase'

import { UserPreferences } from '../model/entity/types'

import { UserLocalRepositoryInterface } from '../provider/UserLocalRepositoryInterface'

export type Input = undefined
type Output = Promise<UserPreferences>

export class GetUserPreferences implements UseCase<Input, Output> { // TODO Sem testes
	private localRepository: UserLocalRepositoryInterface

	constructor(UserLocalRepository: Class<UserLocalRepositoryInterface>) {
		this.localRepository = new UserLocalRepository()
	}

	async exec(): Output {
		return this.localRepository.getUserPreferences()
	}
}
