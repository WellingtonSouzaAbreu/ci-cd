import { UseCase } from '@domain/shared/interfaces/UseCase'

import { FinanceLocalRepositoryInterface } from '@data/finance/FinanceLocalRepository'

type Input = string

type Output = Promise<string>

export class CreateNewLocalCategory implements UseCase<Input, Output> {
	private localRepository: FinanceLocalRepositoryInterface

	constructor(FinanceLocalRepository: new () => FinanceLocalRepositoryInterface) {
		this.localRepository = new FinanceLocalRepository()
	}

	async exec(category: Input): Output {
		await this.localRepository.updateLocalCategories([category])
		return category
	}
}
