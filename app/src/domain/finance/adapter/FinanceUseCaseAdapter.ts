import { Class } from '@domain/shared/interfaces/Class'
import { UserEntity } from '@domain/user/entity/types'

import { FinanceEntityOptional } from '../model/entity/types'

import { FinanceLocalRepositoryInterface, FinanceRemoteRepositoryInterface } from '../provider'
import { CreateFinance } from '../useCases/CreateFinance'
import { CreateNewLocalCategory } from '../useCases/CreateNewLocalCategory'
import { GenerateFinanceForecast } from '../useCases/GenerateFinanceForecast'
import { GetLocalCategories } from '../useCases/GetLocalCategories'
import { RemoveLocalCategory } from '../useCases/RemoveLocalCategory'

export class FinanceUseCasesAdapter { // REFACTOR Melhorar nomenclatura , removr o adapter
	static async createNewLocalCategory(FinanceLocalRepository: Class<FinanceLocalRepositoryInterface>, category: string) {
		return new CreateNewLocalCategory(FinanceLocalRepository).exec(category)
	}

	static async getLocalCategories(FinanceLocalRepository: Class<FinanceLocalRepositoryInterface>) {
		return new GetLocalCategories(FinanceLocalRepository).exec()
	}

	static async removeLocalCategory(FinanceLocalRepository: Class<FinanceLocalRepositoryInterface>, category: string) {
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
		FinanceRemoteRepository: Class<FinanceRemoteRepositoryInterface>,
		currentUser: UserEntity,
		financeData: FinanceEntityOptional
	) {
		return new CreateFinance(FinanceRemoteRepository, currentUser).exec(financeData)
	}
}
