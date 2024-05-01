import { UserEntity } from '@domain/user/entity/types'

import { UserRepositoryInterface } from '@data/user/UserRepositoryInterface'

async function updateUserRepositoryDM(userData: UserEntity, useUserRepository: () => UserRepositoryInterface) {
	if (!userData || (userData && !userData.userId)) {
		console.log('Não foi possível identificar o usuário')
		return
	}

	const { local, remote } = useUserRepository()

	await remote.updateRemoteUser(userData.userId, userData)
	await local.updateLocalUser(userData, true, useUserRepository)
}

export { updateUserRepositoryDM }
