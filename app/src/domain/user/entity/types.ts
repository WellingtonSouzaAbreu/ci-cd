export type UsertEntityOptional = Partial<UserEntity>
export type UserEntity = { // REFACTOR VIRAR interface
	id: string // ENTITY vai sobrescrever
	email?: string
	name: string
	password?: string
}

export type UserPreferences = {
	requestDevicePasswordOnAuth?: boolean
}

export type UserMethod = (user: UserEntity) => any
