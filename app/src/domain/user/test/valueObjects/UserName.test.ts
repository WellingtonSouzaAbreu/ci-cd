import { userErrors } from '@domain/constants/user/userErrors'
import { UserName } from '@domain/user/model/valueObjects/UserName'

describe('File de UserName.ts', () => {
	test('Deve lançar um erro ao tentar criar nome vazio', () => {
		expect(() => new UserName('')).toThrow(userErrors.EMPTY_NAME)
	})

	test('Deve lançar um erro ao tentar criar nome com menos de 3 caracteres', () => {
		expect(() => new UserName('12')).toThrow(userErrors.SMALL_NAME)
	})

	test('Deve lançar um erro ao tentar criar nome com mais de 20 caracteres', () => {
		const largeName = 'Deve lançar um erro ao tentar criar nome muito grande Deve lançar um erro ao tentar criar nome muito grande Deve lançar um erro ao tentar criar nome muito grande Deve lançar um erro ao tentar criar nome muito grande Deve lançar um erro ao tentar criar nome muito grande'
		expect(() => new UserName(largeName)).toThrow(userErrors.LARGE_NAME)
	})

	test('Deve lançar um erro ao tentar criar nome undefined', () => {
		expect(() => new UserName()).toThrow(userErrors.SINGLE_NAME)
	})

	test('Deve lançar um erro ao tentar criar nome sem sobrenome', () => {
		expect(() => new UserName('Wellington')).toThrow(userErrors.SINGLE_NAME)
	})

	test('Deve lançar um erro ao tentar criar nome com caracteres especiais', () => {
		expect(() => new UserName('Wellingt@n souza')).toThrow(userErrors.NAME_INVALID_CHARACTERS)
	})

	test('Deve criar nome completo com sobrenomes', () => {
		const userName = new UserName('Wellington Souza Abreu')

		expect(userName.value).toBe('Wellington Souza Abreu')
		expect(userName.firstName).toBe('Wellington')
		expect(userName.lastName).toBe('Abreu')
	})
})
