import { UserEntity } from '@domain/user/entity/types'

const createNewUser = (userRegistrationData: UserEntity) => ({
	name: userRegistrationData.name,
	email: userRegistrationData.email.toLocaleLowerCase(),
	createdAt: new Date(),
	updatedAt: new Date()
})

export { createNewUser }
