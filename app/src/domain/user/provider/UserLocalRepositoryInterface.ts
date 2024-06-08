import { UserEntity, UserPreferences } from '../model/entity/types'

export interface UserLocalRepositoryInterface {
	getLocalUserData(): Promise<UserEntity | null>,
	getUserPreferences(): Promise<UserPreferences>
	updateLocalUser(userData: UserEntity, mergeStoragedData?: boolean): Promise<void>
	updateUserPreferences(userPreferences: UserPreferences): Promise<void>
}
