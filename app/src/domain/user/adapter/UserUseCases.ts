import { Class } from '@domain/shared/interfaces/Class'

import { UserPreferences, UsertEntityOptional } from '../model/entity/types'

import { UserLocalRepositoryInterface } from '../provider/UserLocalRepositoryInterface'
import { UserRemoteRepositoryInterface } from '../provider/UserRemoteRepositoryInterface'
import { CheckEmailAlreadyRegistered } from '../useCases/CheckEmailAlreadyRegistered'
import { GetLocalUserData } from '../useCases/GetLocalUserData'
import { GetRemoteUserData } from '../useCases/GetRemoteUserData'
import { GetUserPreferences } from '../useCases/GetUserPreferences'
import { PerformQuickSignin } from '../useCases/PerformQuickSignin'
import { UpdateRemoteUser } from '../useCases/UpdateRemoteUser'
import { UpdateUserPreferences } from '../useCases/UpdateUserPreferences'

export class UserUseCases {
	static async checkEmailAlreadyRegistered(UserRemoteRepository: Class<UserRemoteRepositoryInterface>, email: string) {
		return new CheckEmailAlreadyRegistered(UserRemoteRepository).exec(email)
	}

	static async performQuickSignin(
		UserRemoteRepository: Class<UserRemoteRepositoryInterface>,
		UserLocalRepository: Class<UserLocalRepositoryInterface>,
		userId: string
	) {
		return new PerformQuickSignin(UserRemoteRepository, UserLocalRepository).exec(userId)
	}

	static async getRemoteUserData(UserRemoteRepository: Class<UserRemoteRepositoryInterface>, userId: string) {
		return new GetRemoteUserData(UserRemoteRepository).exec(userId)
	}

	static async getLocalUserData(UserLocalRepository: Class<UserLocalRepositoryInterface>) {
		return new GetLocalUserData(UserLocalRepository).exec()
	}

	static async getUserPreferences(UserLocalRepository: Class<UserLocalRepositoryInterface>) {
		return new GetUserPreferences(UserLocalRepository).exec()
	}

	static async updateUserPreferences(UserLocalRepository: Class<UserLocalRepositoryInterface>, preferences: UserPreferences) {
		return new UpdateUserPreferences(UserLocalRepository).exec(preferences)
	}

	static async updateRemoteUserData(
		UserRemoteRepository: Class<UserRemoteRepositoryInterface>,
		userId: string,
		userData: UsertEntityOptional
	) {
		return new UpdateRemoteUser(UserRemoteRepository).exec({ userId, userData })
	}
}
