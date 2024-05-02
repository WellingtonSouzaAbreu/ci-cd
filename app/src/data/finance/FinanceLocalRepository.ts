import AsyncStorage from '@react-native-async-storage/async-storage'

import { FinanceLocalRepositoryInterface } from '@domain/finance/provider'

import { localStorageKeys } from '@data/keys/localStorageKeys'

export class FinanceLocalRepository implements FinanceLocalRepositoryInterface {
	private convertToJson(object: object | []) {
		return JSON.stringify(object)
	}

	private convertFromJson(json: string) {
		return JSON.parse(json)
	}

	async updateLocalCategories(category: string[], overwrite?: boolean): Promise<void> {
		try {
			if (overwrite) {
				const JsonData = this.convertToJson([...category])
				await AsyncStorage.setItem(localStorageKeys.CATEGORIES_REPOSITORY_KEY, JsonData)
				return
			}

			const storagedData = await this.getLocalCategories()
			const allCategories = [...storagedData, ...category]
			const allCategoriesJson = this.convertToJson(allCategories)

			await AsyncStorage.setItem(localStorageKeys.CATEGORIES_REPOSITORY_KEY, allCategoriesJson)
		} catch (error) {
			console.log(error)
			throw new Error(error)
		}
	}

	async getLocalCategories(): Promise<string[]> {
		const storagedDataJSON = await AsyncStorage.getItem(localStorageKeys.CATEGORIES_REPOSITORY_KEY)
		return storagedDataJSON
			? this.convertFromJson(storagedDataJSON)
			: []
	}

	async removeCategory(category: string) {
		const storedCategories = await this.getLocalCategories()
		const filteredCategories = storedCategories.filter((cat) => cat !== category)
		await this.updateLocalCategories(filteredCategories, true)
		return filteredCategories
	}
}
