import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserData } from '@domain/entities/user/types'

async function getLocalUserData() {
	try {
		const storagedDataJSON = await AsyncStorage.getItem('finance.user')
		const storagedData = storagedDataJSON ? JSON.parse(storagedDataJSON) : {}
		return storagedData as UserData
	} catch (error) {
		throw new Error(error)
	}
}

export { getLocalUserData }
