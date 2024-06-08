import { Class } from '@domain/shared/interfaces/Class'
import { UseCase } from '@domain/shared/interfaces/UseCase'

import { FinanceLocalRepositoryInterface } from '../provider'

type Input = string

type Output = Promise<string>

export class CreateNewLocalCategory implements UseCase<Input, Output> { // TODO Sem testes
	private localRepository: FinanceLocalRepositoryInterface

	constructor(FinanceLocalRepository: Class<FinanceLocalRepositoryInterface>) {
		this.localRepository = new FinanceLocalRepository()
	}

	async exec(category: Input): Output {
		await this.localRepository.updateLocalCategories([category])
		return category
	}
}
