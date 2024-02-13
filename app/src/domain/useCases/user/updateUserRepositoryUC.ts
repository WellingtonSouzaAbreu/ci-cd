import { UserData } from '@domain/entities/user/types'

import { UserRepositoryAdapterInterface } from '@data/user/UserRepositoryAdapterInterface'

async function updateUserRepositoryUC(userData: UserData, UserRepositoryAdapter: () => UserRepositoryAdapterInterface) {
	if (!userData || (userData && !userData.userId)) {
		console.log('Não foi possível identificar o usuário')
		return
	}

	const { local, remote } = UserRepositoryAdapter()

	await remote.updateRemoteUser(userData.userId, userData)
	await local.updateLocalUser(userData)
}

export { updateUserRepositoryUC }
