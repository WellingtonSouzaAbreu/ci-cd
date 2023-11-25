function validateUserName(dirtyUserName: string) {
	if (!dirtyUserName) return false

	const cleanUserName = dirtyUserName.trim()
	if (!cleanUserName) return false
	return true
}

function validateEmail(dirtyEmail: string) {
	if (!dirtyEmail) return false

	const cleanEmail = dirtyEmail.trim()
	const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (!cleanEmail.includes('@')) return false
	if (!regexEmail.test(cleanEmail)) return false
	return true
}

function validatePassword(dirtyPassword: string) {
	if (!dirtyPassword) return false

	const cleanPassword = dirtyPassword.trim()
	if (cleanPassword.length < 6) return false
	return true
}

export { validateUserName, validateEmail, validatePassword }
