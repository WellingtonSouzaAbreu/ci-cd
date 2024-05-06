import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserEntity } from '@domain/user/model/entity/types'

async function getLocalUserData() {
	try {
		const storagedDataJSON = await AsyncStorage.getItem('finance.user')
		const storagedData = storagedDataJSON ? JSON.parse(storagedDataJSON) : {}
		return storagedData as UserEntity
	} catch (error) {
		throw new Error(error)
	}
}

export { getLocalUserData }
