import { userErrors } from '@domain/constants/user/userErrors'
import { StrongPassword } from '@domain/user/model/valueObjects/StrongPassword'

describe('Value Object StrongPassword.ts', () => {
	test('Deve criar um objeto StrongPassword com uma senha válida', () => {
		const validPassword = 'Password@123'
		const strongPassword = new StrongPassword(validPassword)
		expect(strongPassword.value).toBe(validPassword)
	})

	test('Deve lançar um erro se a senha estiver vazia', () => {
		expect(() => new StrongPassword()).toThrow(userErrors.EMPTY_PASSWORD)
	})

	test('Deve lançar um erro se a senha for muito curta', () => {
		const shortPassword = 'Short'
		expect(() => new StrongPassword(shortPassword)).toThrow(userErrors.SMALL_PASSWORD)
	})

	test('Deve lançar um erro se a senha for muito longa', () => {
		const longPassword = 'VeryLongPassword1234567890'
		expect(() => new StrongPassword(longPassword)).toThrow(userErrors.LARGE_PASSWORD)
	})

	test('Deve lançar um erro se a senha não tiver uma letra maiúscula', () => {
		const noUppercasePassword = 'weakpassword@123'
		expect(() => new StrongPassword(noUppercasePassword)).toThrow(userErrors.UPPERCASE_CHARACTER_PASSWORD)
	})

	test('Deve lançar um erro se a senha não tiver uma letra minúscula', () => {
		const noLowercasePassword = 'WEAKPASSWORD@123'
		expect(() => new StrongPassword(noLowercasePassword)).toThrow(userErrors.LOWERCASE_CHARACTER_PASSWORD)
	})

	test('Deve lançar um erro se a senha não tiver um caractere especial', () => {
		const noSymbolPassword = 'WeakPassword123'
		expect(() => new StrongPassword(noSymbolPassword)).toThrow(userErrors.SYMBOL_CHARACTER_PASSWORD)
	})
})
