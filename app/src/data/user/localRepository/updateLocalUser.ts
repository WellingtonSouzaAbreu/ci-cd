import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserEntity } from '@domain/user/model/entity/types'

import { UserRepositoryInterface } from '@data/user/UserRepositoryInterface'

const isValidObject = (object: unknown) => typeof object === 'object' && object !== null

async function updateLocalUser(userData: UserEntity, mergeStoragedData: boolean, useUserRepository: () => UserRepositoryInterface) {
	try {
		const { local } = useUserRepository()

		if (!isValidObject(userData)) throw new Error('O Objeto de usuário não é um objeto válido!')

		let mergedData = {}
		if (mergeStoragedData) {
			mergedData = await local.getLocalUserData()
			console.log(mergedData)
		}

		const userDataJSON = JSON.stringify({
			...mergedData,
			...userData
		})

		await AsyncStorage.setItem('finance.user', userDataJSON)
	} catch (error) {
		console.log(error)
		throw new Error(error)
	}
}

export { updateLocalUser }
