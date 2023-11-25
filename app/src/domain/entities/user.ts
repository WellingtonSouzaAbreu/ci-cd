import { UserRegistrationData } from 'src/@types/entities/user'

const createNewUser = (userRegistrationData: UserRegistrationData) => ({
	name: userRegistrationData.name,
	email: userRegistrationData.email,
	createdAt: new Date(),
	updatedAt: new Date()
})

export { createNewUser }
