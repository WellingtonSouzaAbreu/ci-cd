import { getLocalUserData as getLocalUserDataRespository } from '../user/getLocalUserData'

async function getLocalUserData(): Promise<any> { // TODO Type UserCollection, CollectionFIcara como entities
	return getLocalUserDataRespository()
}

export { getLocalUserData }
