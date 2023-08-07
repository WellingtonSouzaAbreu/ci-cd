import { validateUserName, validateEmail, validatePassword } from '../rules/validateUserFields'

function validateUserNameUC(name: string) {
	const nameIsValid = validateUserName(name)
	return nameIsValid
}

function validateEmailUC(email: string) {
	const emailIsValid = validateEmail(email)
	return emailIsValid
}

function validatePasswordUC(email: string) {
	const emailIsValid = validatePassword(email)
	return emailIsValid
}

export { validateUserNameUC, validateEmailUC, validatePasswordUC }
