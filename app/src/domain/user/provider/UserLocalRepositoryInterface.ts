import { UserEntity } from '../model/entity/types'

export interface UserLocalRepositoryInterface {
	updateLocalUser(userData: UserEntity): Promise<boolean>
}
