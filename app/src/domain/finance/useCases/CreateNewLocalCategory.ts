import { UseCase } from '@domain/shared/interfaces/UseCase'

import { FinanceRepositoryInterface } from '@data/finance/FinanceRepository'

type Input = string

type Output = Promise<string>

export class CreateNewLocalCategory implements UseCase<Input, Output> {
	private financeRepository: FinanceRepositoryInterface

	constructor(financeRepository: FinanceRepositoryInterface) {
		this.financeRepository = financeRepository
	}

	async exec(category: Input): Output {
		await this.financeRepository.updateLocalCategories(category)
		return category
	}
}
