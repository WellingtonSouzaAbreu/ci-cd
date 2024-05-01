import { FinanceEntityOptional } from '../model/entity/types'

import { FinanceLocalRepositoryInterface } from '@data/finance/FinanceLocalRepository'
import { FinanceRemoteRepositoryInterface } from '@data/finance/FinanceRemoteRepository'

import { CreateFinance } from '../useCases/CreateFinance'
import { CreateNewLocalCategory } from '../useCases/CreateNewLocalCategory'
import { GenerateFinanceForecast } from '../useCases/GenerateFinanceForecast'
import { GetLocalCategories } from '../useCases/GetLocalCategories'
import { RemoveLocalCategory } from '../useCases/RemoveLocalCategory'

export class FinanceUseCasesAdapter {
	static async createNewLocalCategory(FinanceLocalRepository: new () => FinanceLocalRepositoryInterface, category: string) {
		return new CreateNewLocalCategory(FinanceLocalRepository).exec(category)
	}

	static async getLocalCategories(FinanceLocalRepository: new () => FinanceLocalRepositoryInterface) {
		return new GetLocalCategories(FinanceLocalRepository).exec()
	}

	static async removeLocalCategory(FinanceLocalRepository: new () => FinanceLocalRepositoryInterface, category: string) {
		return new RemoveLocalCategory(FinanceLocalRepository).exec(category)
	}

	static generateFinanceForecast(financeData: {
		date: Date
		value: number | string
		numberOfInstallments: number
	}) {
		return new GenerateFinanceForecast().exec(financeData)
	}

	static createFinance(
		FinanceRemoteRepository: new () => FinanceRemoteRepositoryInterface,
		currentUser: { id: string }, // REFACTOR Definir tipo de usuário
		financeData: FinanceEntityOptional
	) {
		return new CreateFinance(FinanceRemoteRepository, currentUser).exec(financeData)
	}
}
