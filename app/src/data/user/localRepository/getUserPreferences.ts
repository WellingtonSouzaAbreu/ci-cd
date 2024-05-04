import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserPreferences } from '@domain/user/entity/types'

import { localStorageKeys } from '@data/keys/localStorageKeys'

async function getUserPreferences() {
	try {
		const storagedDataJSON = await AsyncStorage.getItem(localStorageKeys.USER_PREFERENCES_REPOSITORY_KEY)
		const storagedData = storagedDataJSON ? JSON.parse(storagedDataJSON) : {}
		console.log(storagedData)
		return storagedData as UserPreferences
	} catch (error) {
		console.log(error)
	}
}

export { getUserPreferences }
