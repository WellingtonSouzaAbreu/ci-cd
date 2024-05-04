import { errorMessages } from '@domain/constants/errorMessages'
import { WeakPassword } from '@domain/user/model/valueObjects/WeakPassword'

describe('File WeakPassword.ts', () => {
	test('Deve criar um objeto WeakPassword com uma senha válida', () => {
		const validPassword = 'Password@123'
		const strongPassword = new WeakPassword(validPassword)
		expect(strongPassword.value).toBe(validPassword)
	})

	test('Deve lançar um erro se a senha estiver vazia', () => {
		expect(() => new WeakPassword()).toThrow(errorMessages.EMPTY_PASSWORD)
	})

	test('Deve lançar um erro se a senha for muito curta', () => {
		const shortPassword = 'Short'
		expect(() => new WeakPassword(shortPassword)).toThrow(errorMessages.SMALL_PASSWORD)
	})

	test('Deve lançar um erro se a senha for muito longa', () => {
		const longPassword = 'VeryLongPassword1234567890'
		expect(() => new WeakPassword(longPassword)).toThrow(errorMessages.LARGE_PASSWORD)
	})
})
