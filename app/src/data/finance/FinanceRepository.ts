export interface FinanceRepositoryInterface { // REFACTOR Deve ficar em provider no domínio
	updateLocalCategories(string: string): Promise<void>
}

export class FinanceRepository implements FinanceRepositoryInterface {
	async updateLocalCategories(string: string): Promise<void> {
		console.log('updateCategories')
		console.log(string)
	}
}
