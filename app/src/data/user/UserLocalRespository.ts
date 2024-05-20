import { UserEntity } from '@domain/user/model/entity/types'
import { UserLocalRepositoryInterface } from '@domain/user/provider/UserLocalRepositoryInterface'

export class UserLocalRepository implements UserLocalRepositoryInterface {
	async updateLocalUser(userData: UserEntity) {
		console.log('Update local user ainda não implementado') // TODO
		return true
	}
}
