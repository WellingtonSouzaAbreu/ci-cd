import { GenerateFinanceForecast } from '../useCases/GenerateFinanceForecast'

export function FinanceUseCasesAdapter() { // REFACTOR Deve ser class
	return { GenerateFinanceForecast: GenerateFinanceForecast }
}
