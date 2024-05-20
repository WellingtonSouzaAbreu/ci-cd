/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserEntity, UserPreferences } from '@domain/user/model/entity/types'
import { UserLocalRepositoryInterface } from '@domain/user/provider/UserLocalRepositoryInterface'

export const mockUserData: UserEntity = { id: '1', name: 'John Doe', email: 'we@gmail.com' }

export class UserLocalRepositoryMock implements Partial<UserLocalRepositoryInterface> {
	getUserPreferences(): Promise<UserPreferences> {
		throw new Error('Method not implemented.')
	}
	updateLocalUser(userData: UserEntity, mergeStoragedData?: boolean): Promise<void> {
		throw new Error('Method not implemented.')
	}
	updateUserPreferences(userPreferences: UserPreferences): Promise<void> {
		throw new Error('Method not implemented.')
	}

	async getLocalUserData(): Promise<UserEntity | null> {
		return mockUserData
	}
}
