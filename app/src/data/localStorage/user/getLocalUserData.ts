import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserData } from 'src/@types/entities/user'

async function getLocalUserData() {
	try {
		const storagedDataJSON = await AsyncStorage.getItem('finance.user')
		const storagedData = storagedDataJSON ? JSON.parse(storagedDataJSON) : {}
		return storagedData as UserData
	} catch (error) {
		console.log(error)
		throw new Error(error)
	}
}

export { getLocalUserData }
