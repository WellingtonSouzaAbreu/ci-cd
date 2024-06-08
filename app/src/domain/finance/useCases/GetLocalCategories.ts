import { Class } from '@domain/shared/interfaces/Class'
import { UseCase } from '@domain/shared/interfaces/UseCase'

import { FinanceCategories } from '../model/domainServices/FinanceCategories'
import { FinanceLocalRepositoryInterface } from '../provider'

type Output = Promise<string[]>

export class GetLocalCategories implements UseCase<void, Output> { // TODO Sem testes
	private localRepository: FinanceLocalRepositoryInterface

	constructor(FinanceLocalRepository: Class<FinanceLocalRepositoryInterface>) {
		this.localRepository = new FinanceLocalRepository()
	}

	async exec(): Output {
		const storedCategories = await this.localRepository.getLocalCategories()
		const mergedCategories = new FinanceCategories(storedCategories).categories
		return mergedCategories
	}
}
