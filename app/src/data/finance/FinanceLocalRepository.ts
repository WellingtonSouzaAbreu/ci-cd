import AsyncStorage from '@react-native-async-storage/async-storage'

import { FinanceLocalRepositoryInterface } from '@domain/finance/provider'

import { localStorageKeys } from '@data/keys/localStorageKeys'
import { JSONMethods } from '@data/shared/JSONMethods'

export class FinanceLocalRepository implements FinanceLocalRepositoryInterface {
	async updateLocalCategories(category: string[], overwrite?: boolean): Promise<void> {
		try {
			if (overwrite) {
				const JsonData = JSONMethods.convertToJson([...category])
				await AsyncStorage.setItem(localStorageKeys.CATEGORIES_REPOSITORY_KEY, JsonData)
				return
			}

			const storagedData = await this.getLocalCategories()
			const allCategories = [...storagedData, ...category]
			const allCategoriesJson = JSONMethods.convertToJson(allCategories)

			await AsyncStorage.setItem(localStorageKeys.CATEGORIES_REPOSITORY_KEY, allCategoriesJson)
		} catch (error) {
			console.log(error)
			throw new Error(error)
		}
	}

	async getLocalCategories(): Promise<string[]> {
		const storagedDataJSON = await AsyncStorage.getItem(localStorageKeys.CATEGORIES_REPOSITORY_KEY)
		return storagedDataJSON
			? JSONMethods.convertFromJson(storagedDataJSON)
			: []
	}

	async removeCategory(category: string) {
		const storedCategories = await this.getLocalCategories()
		const filteredCategories = storedCategories.filter((cat) => cat !== category)
		await this.updateLocalCategories(filteredCategories, true)
		return filteredCategories
	}
}
