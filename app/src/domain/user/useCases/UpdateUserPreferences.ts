import { Class } from '@domain/shared/interfaces/Class'
import { UseCase } from '@domain/shared/interfaces/UseCase'

import { UserPreferences } from '../model/entity/types'

import { UserLocalRepositoryInterface } from '../provider/UserLocalRepositoryInterface'

export type Input = UserPreferences
type Output = Promise<void>

export class UpdateUserPreferences implements UseCase<Input, Output> { // TODO Sem testes
	private localRepository: UserLocalRepositoryInterface

	constructor(UserLocalRepository: Class<UserLocalRepositoryInterface>) {
		this.localRepository = new UserLocalRepository()
	}

	async exec(props: Input): Output {
		await this.localRepository.updateUserPreferences(props)
	}
}
