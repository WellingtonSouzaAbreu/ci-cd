import { validateUserName, validateEmail, validatePassword } from '../rules/validateUserFields'

function validateUserNameUC(name: string) {
	const nameIsValid = validateUserName(name)
	return nameIsValid
}

function validateEmailUC(email: string) {
	const emailIsValid = validateEmail(email)
	return emailIsValid
}

function validatePasswordUC(password: string) {
	const passwordIsValid = validatePassword(password)
	return passwordIsValid
}

export { validateUserNameUC, validateEmailUC, validatePasswordUC }
