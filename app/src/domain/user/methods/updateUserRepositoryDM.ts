import { UserEntity } from '@domain/user/model/entity/types'

import { UserRemoteRepository } from '@data/user/UserRemoteRepository'
import { UserRepositoryInterface } from '@data/user/UserRepositoryInterface'

import { UserUseCases } from '../adapter/UserUseCases'

async function updateUserRepositoryDM(userData: UserEntity, useUserRepository: () => UserRepositoryInterface) {
	if (!userData || (userData && !userData.id)) {
		console.log('Não foi possível identificar o usuário')
		return
	}

	const { local } = useUserRepository()

	await UserUseCases.updateRemoteUserData(UserRemoteRepository, userData.id, userData)
	await local.updateLocalUser(userData, true, useUserRepository)
}

export { updateUserRepositoryDM }
