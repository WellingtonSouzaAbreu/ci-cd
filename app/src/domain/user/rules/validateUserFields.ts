function validateUserName(dirtyUserName: string) {
	const cleanUserName = dirtyUserName.trim()
	if (!cleanUserName) return false
	return true
}

function validateEmail(dirtyEmail: string) {
	const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	const cleanEmail = dirtyEmail.trim()

	if (!cleanEmail.includes('@')) return false
	if (!regexEmail.test(cleanEmail)) return false
	return true
}

function validatePassword(dirtyPassword: string) {
	const cleanPassword = dirtyPassword.trim()
	if (cleanPassword.length < 6) return false
	return true
}

export { validateUserName, validateEmail, validatePassword }
