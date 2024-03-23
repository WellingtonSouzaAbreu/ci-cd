export type UserRegisterData = {
	email?: string
	password?: string
	name?: string
}

export type UserAuthData = {
	email?: string
	password?: string
	token?: string
}

export type UserData = {
	userId?: string
	email?: string
	name?: string
}

export type UserMethod = (user: UserData) => any
