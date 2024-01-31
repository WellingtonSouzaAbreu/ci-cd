import { UserData } from 'src/@types/entities/user'

import { UserRepositoryAdapterInterface } from '@data/user/UserRepositoryAdapterInterface'

async function updateUserRepositoryUC(userData: UserData, userRepositoryAdapter: () => UserRepositoryAdapterInterface) {
	if (!userData || (userData && !userData.userId)) {
		console.log('Não foi possível identificar o usuário')
		return
	}

	const { local, remote } = userRepositoryAdapter()

	await remote.updateRemoteUser(userData.userId, userData)
	await local.updateLocalUser(userData)
}

export { updateUserRepositoryUC }
