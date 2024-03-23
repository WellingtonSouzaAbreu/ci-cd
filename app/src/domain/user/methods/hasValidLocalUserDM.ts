import { UserRepositoryInterface } from '@data/user/UserRepositoryInterface'

async function hasValidLocalUserDM(useUserRepository: () => UserRepositoryInterface) {
	const { local } = useUserRepository()
	const storagedUserData = await local.getLocalUserData()

	try {
		return !!(storagedUserData && storagedUserData.userId)
	} catch (error) {
		console.log(error)
		throw new Error(error)
	}
}

export { hasValidLocalUserDM }
