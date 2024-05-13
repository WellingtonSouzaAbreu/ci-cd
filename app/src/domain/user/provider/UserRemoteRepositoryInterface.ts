import { UserEntity, UsertEntityOptional } from '../model/entity/types'

export interface UserRemoteRepositoryInterface {
	getSignInMethodsForEmail(email: string): Promise<string[]>
	getUserById(userId: string): Promise<UserEntity | null>
	updateRemoteUser(userId: string, userData: UsertEntityOptional): Promise<void>
}
