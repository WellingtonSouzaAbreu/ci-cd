import { errorMessages } from '@domain/constants/errorMessages'
import { Email } from '@domain/user/model/valueObjects/Email'

describe('File Email.ts', () => {
	test('Deve criar um objeto Email com valor válido', () => {
		const validEmail = 'test@example.com'
		const email = new Email(validEmail)
		expect(email.value).toBe(validEmail)
	})

	test('Deve lançar um erro ao fornecer um email inválido', () => {
		const invalidEmail = 'invalidEemail'
		expect(() => new Email(invalidEmail)).toThrow(errorMessages.INVALID_EMAIL)
	})

	test('Deve lançar um erro ao fornecer um email null ou undefined', () => {
		const invalidEmailNull = null
		const invalidEmailUndefined = undefined
		expect(() => new Email(invalidEmailNull)).toThrow(errorMessages.INVALID_EMAIL)
		expect(() => new Email(invalidEmailUndefined)).toThrow(errorMessages.INVALID_EMAIL)
	})

	test('Deve retornar o nome de usuário corretamente', () => {
		const email = new Email('test@example.com')
		expect(email.name).toBe('test')
	})

	test('Deve retornar o domínio corretamente', () => {
		const email = new Email('test@example.com')
		expect(email.domain).toBe('example.com')
	})
})
