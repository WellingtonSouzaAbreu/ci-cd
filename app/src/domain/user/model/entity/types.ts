import { EntityProps } from '@domain/shared/valueObjects/Entity'

export type UsertEntityOptional = Partial<UserEntity>
export interface UserEntity extends EntityProps {
	email?: string
	name: string
	createdAt?: Date
	updatedAt?: Date
}

export type UserPreferences = {
	requestDevicePasswordOnAuth?: boolean
}

export type UserMethod = (user: UserEntity) => any
