import { UserRegisterData } from '@contexts/AuthContext/types'

const createNewUser = (userRegistrationData: UserRegisterData) => ({
	name: userRegistrationData.name,
	email: userRegistrationData.email.toLocaleLowerCase(),
	createdAt: new Date(),
	updatedAt: new Date()
})

export { createNewUser }
