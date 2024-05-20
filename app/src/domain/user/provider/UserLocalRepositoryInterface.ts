import { UserEntity, UserPreferences } from '../model/entity/types'

export interface UserLocalRepositoryInterface {
	getLocalUserData(): Promise<UserEntity>,
	getUserPreferences(): Promise<UserPreferences>
	updateLocalUser(userData: UserEntity, mergeStoragedData?: boolean): Promise<void>
	updateUserPreferences(userPreferences: UserPreferences): Promise<void>
}
