import { UserEntity } from '@domain/user/model/entity/types'

import { UserLocalRepository } from '@data/user/UserLocalRespository'
import { UserRemoteRepository } from '@data/user/UserRemoteRepository'

async function updateUserRepositoryDM(userData: UserEntity) {
	if (!userData || (userData && !userData.id)) {
		console.log('Não foi possível identificar o usuário')
		return
	}

	await new UserRemoteRepository().updateRemoteUser(userData.id, userData)
	await new UserLocalRepository().updateLocalUser(userData, true)
}

export { updateUserRepositoryDM }
