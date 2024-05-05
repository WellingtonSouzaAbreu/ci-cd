import { Class } from '@domain/shared/interfaces/Class'
import { UseCase } from '@domain/shared/interfaces/UseCase'

import { FinanceCategories } from '../model/domainServices/FinanceCategories'
import { FinanceLocalRepositoryInterface } from '../provider'

type Input = string

type Output = Promise<string[]>

export class RemoveLocalCategory implements UseCase<Input, Output> {
	private localRepository: FinanceLocalRepositoryInterface

	constructor(FinanceLocalRepository: Class<FinanceLocalRepositoryInterface>) {
		this.localRepository = new FinanceLocalRepository()
	}

	async exec(category: Input): Output {
		const newLocalCategories = await this.localRepository.removeCategory(category)
		return new FinanceCategories(newLocalCategories).categories
	}
}
