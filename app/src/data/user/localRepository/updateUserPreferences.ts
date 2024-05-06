import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserPreferences } from '@domain/user/model/entity/types'

import { localStorageKeys } from '@data/keys/localStorageKeys'

import { getUserPreferences } from './getUserPreferences'

const isValidObject = (object: unknown) => typeof object === 'object' && object !== null

async function updateUserPreferences(userPreferences: UserPreferences) {
	try {
		if (!isValidObject(userPreferences)) throw new Error('O Objeto de usuário não é um objeto válido!')

		const storedPreferences = await getUserPreferences()
		console.log(storedPreferences)

		const userPreferencesJSON = JSON.stringify({
			...storedPreferences,
			...userPreferences
		})

		await AsyncStorage.setItem(localStorageKeys.USER_PREFERENCES_REPOSITORY_KEY, userPreferencesJSON)
	} catch (error) {
		console.log(error)
		throw new Error(error)
	}
}

export { updateUserPreferences }
