export interface FinanceLocalRepositoryInterface {
	updateLocalCategories(category: string[], overwrite?: boolean): Promise<void>
	getLocalCategories(): Promise<string[]>
	removeCategory(category: string): Promise<string[]>
}
