import { UserLocalRepository } from '@data/user/UserLocalRespository'

async function hasValidLocalUserDM() {
	try {
		const localRepository = new UserLocalRepository()
		const storagedUserData = await localRepository.getLocalUserData()
		return !!(storagedUserData && storagedUserData.id)
	} catch (error) {
		console.log(error)
		throw new Error(error)
	}
}

export { hasValidLocalUserDM }
