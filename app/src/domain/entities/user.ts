const createNewUser = (name: string, email: string) => ({
	name,
	email,
	createdAt: Date.now(),
	updatedAt: Date.now(),
})

export { createNewUser }
