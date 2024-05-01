export type UserRegisterData = { // REFACTOR UNUSED
	email?: string
	password?: string
	name?: string
}

export type UserAuthData = { // REFACTOR UNUSED
	email?: string
	password?: string
	token?: string
}

export type UsertEntityOptional = Partial<UserEntity>
export type UserEntity = {
	userId?: string
	email?: string
	name?: string
}

export type UserMethod = (user: UserEntity) => any
