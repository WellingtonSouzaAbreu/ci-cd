import { UserRegistrationData } from '@domain/entities/user/types'

const createNewUser = (userRegistrationData: UserRegistrationData) => ({
	name: userRegistrationData.name,
	email: userRegistrationData.email,
	createdAt: new Date(),
	updatedAt: new Date()
})

export { createNewUser }
