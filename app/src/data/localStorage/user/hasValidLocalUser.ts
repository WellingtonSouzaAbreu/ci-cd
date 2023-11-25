import { UserData } from 'src/@types/entities/user'

type getLocalUserDataFunction = () => Promise<UserData>

async function hasValidLocalUser(getLocalUserData: getLocalUserDataFunction) {
	try {
		const storagedUser = await getLocalUserData()
		return !!(storagedUser && storagedUser.userId)
	} catch (error) {
		console.log(error)
		throw new Error(error)
	}
}

export { hasValidLocalUser }
