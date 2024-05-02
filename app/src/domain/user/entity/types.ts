export type UsertEntityOptional = Partial<UserEntity>
export type UserEntity = {
	id?: string // ENTITY vai sobrescrever
	email?: string
	name?: string
	password?: string
}

export type UserMethod = (user: UserEntity) => any
