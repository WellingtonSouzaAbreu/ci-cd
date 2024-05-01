import { validateUserName, validateEmail, validatePassword } from '../core/validateUserFields'

function validateUserNameDM(name: string) {
	const nameIsValid = validateUserName(name)
	return nameIsValid
}

function validateEmailDM(email: string) {
	const emailIsValid = validateEmail(email)
	return emailIsValid
}

function validatePasswordDM(password: string) {
	const passwordIsValid = validatePassword(password)
	return passwordIsValid
}

export { validateUserNameDM, validateEmailDM, validatePasswordDM }
