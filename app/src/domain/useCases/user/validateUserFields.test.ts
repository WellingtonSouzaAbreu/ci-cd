import { validateEmailUC, validateUserNameUC } from './validateUserFieldsUC'

describe('Testando módulo de validação de dados de usuário', () => {
	test('Deve retornar TRUE quando o nome for válido', async () => {
		const res = validateUserNameUC('Mock User')
		expect(res).toBe(true)
	})

	test('Deve retornar FALSE quando o nome for vazio', async () => {
		const res = validateUserNameUC('')
		expect(res).toBe(false)
	})

	test('Deve retornar TRUE se o email conter "@" e ".com"', async () => {
		const res = validateEmailUC('mockuser@gmail.com')
		expect(res).toBe(true)
	})

	test('Deve retornar FALSE se o email não conter "@"', async () => {
		const res = validateEmailUC('mockusergmail.com')
		expect(res).toBe(false)
	})

	test('Deve retornar FALSE se o email não conter ".com"', async () => {
		const res = validateEmailUC('mockuser@gmail')
		expect(res).toBe(false)
	})
})
