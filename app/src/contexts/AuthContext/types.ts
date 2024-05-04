import { UserEntity } from '@domain/user/entity/types'

export type UserAuthData = {
	email?: string
	password?: string
	token?: string
}

export type UserRegisterData = {
	email?: string
	password?: string
	name?: string
}

export type AuthenticatedUserDate = UserEntity

export type AuthContextType = {
	userAuthData?: UserAuthData
	setUserAuthDataOnContext: (data: UserAuthData) => void
	userRegistrationData?: UserRegisterData
	setUserRegisterDataOnContext: (data: UserRegisterData) => void
	authenticatedUser?: AuthenticatedUserDate
	setUserDataOnContext: (data: AuthenticatedUserDate) => void
}
