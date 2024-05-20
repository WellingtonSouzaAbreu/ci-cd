import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserPreferences } from '@domain/user/model/entity/types'

import { localStorageKeys } from '@data/keys/localStorageKeys'

async function getUserPreferences() {
	try {
		const storagedDataJSON = await AsyncStorage.getItem(localStorageKeys.USER_PREFERENCES_REPOSITORY_KEY)
		const storagedData = storagedDataJSON ? JSON.parse(storagedDataJSON) : {}
		return storagedData as UserPreferences
	} catch (error) {
		console.log(error)
	}
}

export { getUserPreferences }