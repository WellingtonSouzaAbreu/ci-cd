import { UseCase } from '@domain/shared/interfaces/UseCase'

import { FinanceLocalRepositoryInterface } from '@data/finance/FinanceLocalRepository'

import { FinanceCategories } from '../model/domainServices/FinanceCategories'

type Input = string

type Output = Promise<string[]>

export class RemoveLocalCategory implements UseCase<Input, Output> {
	private localRepository: FinanceLocalRepositoryInterface

	constructor(FinanceLocalRepository: new () => FinanceLocalRepositoryInterface) {
		this.localRepository = new FinanceLocalRepository()
	}

	async exec(category: Input): Output {
		const newLocalCategories = await this.localRepository.removeCategory(category)
		return new FinanceCategories(newLocalCategories).categories
	}
}
