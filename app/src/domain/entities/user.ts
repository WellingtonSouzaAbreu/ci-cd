const createNewUser = (name: string, email: string) => ({
	name,
	email,
	createdAt: new Date(),
	updatedAt: new Date()
})

export { createNewUser }
