import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserEntity, UserPreferences } from '@domain/user/model/entity/types'
import { UserLocalRepositoryInterface } from '@domain/user/provider/UserLocalRepositoryInterface'

import { localStorageKeys } from '@data/keys/localStorageKeys'
import { JSONMethods } from '@data/shared/JSONMethods'

const isValidObject = (object: unknown) => typeof object === 'object' && object !== null

export class UserLocalRepository implements UserLocalRepositoryInterface {
	async getLocalUserData() {
		try {
			const storagedDataJSON = await AsyncStorage.getItem(localStorageKeys.USER_REPOSITORY_KEY)
			const storagedData = storagedDataJSON ? JSONMethods.convertFromJson(storagedDataJSON) : null
			return storagedData as UserEntity
		} catch (error) {
			console.log(error)
			throw new Error('Houve um erro ao obter dados de usuário local')
		}
	}

	async getUserPreferences() {
		try {
			const storagedDataJSON = await AsyncStorage.getItem(localStorageKeys.USER_PREFERENCES_REPOSITORY_KEY)
			const storagedData = storagedDataJSON ? JSONMethods.convertFromJson(storagedDataJSON) : {}
			return storagedData as UserPreferences
		} catch (error) {
			console.log(error)
			throw new Error('Houve um erro ao obter preferências de usuário local')
		}
	}

	async updateLocalUser(userData: UserEntity, mergeStoragedData?: boolean) {
		try {
			if (!isValidObject(userData)) throw new Error('O objeto de usuário local não é um objeto válido!')

			let mergedData = {}
			if (mergeStoragedData) {
				mergedData = await new UserLocalRepository().getLocalUserData()
			}

			const userDataJSON = JSONMethods.convertToJson({ ...mergedData, ...userData })

			await AsyncStorage.setItem(localStorageKeys.USER_REPOSITORY_KEY, userDataJSON)
		} catch (error) {
			console.log(error)
			throw new Error('Houve um erro ao atualizar dados de usuário local')
		}
	}

	async updateUserPreferences(userPreferences: UserPreferences) {
		try {
			if (!isValidObject(userPreferences)) throw new Error('O Objeto de usuário não é um objeto válido!')

			const storedPreferences = await new UserLocalRepository().getUserPreferences()
			console.log(storedPreferences)

			const userPreferencesJSON = JSONMethods.convertToJson({
				...storedPreferences,
				...userPreferences
			})

			await AsyncStorage.setItem(localStorageKeys.USER_PREFERENCES_REPOSITORY_KEY, userPreferencesJSON)
		} catch (error) {
			console.log(error)
			throw new Error(error)
		}
	}
}
