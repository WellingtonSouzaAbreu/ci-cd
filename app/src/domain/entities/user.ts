const createNewUser = (name: string, email: string, password: string) => ({
	name,
	email,
	password,
	createdAt: Date.now(),
	updatedAt: Date.now(),
})

export { createNewUser }
