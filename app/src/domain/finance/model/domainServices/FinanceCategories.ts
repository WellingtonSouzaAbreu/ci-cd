export class FinanceCategories {
	categories: string[]
	private defaultCategories = ['Supermercado', 'Farmácia', 'Jogos', 'Restaurantes', 'Porcarias', 'Educação', 'Moto']

	constructor(categories: string[]) {
		this.categories = this.removeEqualsCategories([...this.defaultCategories, ...categories])
	}

	removeEqualsCategories(values: string[]): string[] {
		if (!values) return []
		return values.filter((item, index) => values.indexOf(item) === index)
	}
}
