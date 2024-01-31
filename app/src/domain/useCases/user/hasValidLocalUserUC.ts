import { UserRepositoryAdapterInterface } from '@data/user/UserRepositoryAdapterInterface'

async function hasValidLocalUserUC(userRepositoryAdapter: () => UserRepositoryAdapterInterface) {
	const { local } = userRepositoryAdapter()
	const storagedUserData = await local.getLocalUserData()

	try {
		return !!(storagedUserData && storagedUserData.userId)
	} catch (error) {
		console.log(error)
		throw new Error(error)
	}
}

export { hasValidLocalUserUC }
