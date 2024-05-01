import { UseCase } from '@domain/shared/interfaces/UseCase'

import { FinanceLocalRepositoryInterface } from '@data/finance/FinanceLocalRepository'

import { FinanceCategories } from '../model/domainServices/FinanceCategories'

type Output = Promise<string[]>

export class GetLocalCategories implements UseCase<void, Output> {
	private localRepository: FinanceLocalRepositoryInterface

	constructor(FinanceLocalRepository: new () => FinanceLocalRepositoryInterface) {
		this.localRepository = new FinanceLocalRepository()
	}

	async exec(): Output {
		const storedCategories = await this.localRepository.getLocalCategories()
		const mergedCategories = new FinanceCategories(storedCategories).categories
		return mergedCategories
	}
}
