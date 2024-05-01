import { FinanceLocalRepositoryInterface } from '@data/finance/FinanceLocalRepository'

import { CreateNewLocalCategory } from '../useCases/CreateNewLocalCategory'
import { GenerateFinanceForecast, Input } from '../useCases/GenerateFinanceForecast'
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

	static generateFinanceForecast(financeData: Input) {
		return new GenerateFinanceForecast().exec(financeData)
	}
}
