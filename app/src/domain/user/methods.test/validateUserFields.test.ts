import { validateUserNameDM, validateEmailDM } from '../methods/validateUserFieldsDM'

describe('Testando módulo de validação de dados de usuário', () => {
	test('Deve retornar TRUE quando o nome for válido', async () => {
		const res = validateUserNameDM('Mock User')
		expect(res).toBe(true)
	})

	test('Deve retornar FALSE quando o nome for vazio', async () => {
		const res = validateUserNameDM('')
		expect(res).toBe(false)
	})

	test('Deve retornar TRUE se o email conter "@" e ".com"', async () => {
		const res = validateEmailDM('mockuser@gmail.com')
		expect(res).toBe(true)
	})

	test('Deve retornar FALSE se o email não conter "@"', async () => {
		const res = validateEmailDM('mockusergmail.com')
		expect(res).toBe(false)
	})

	test('Deve retornar FALSE se o email não conter ".com"', async () => {
		const res = validateEmailDM('mockuser@gmail')
		expect(res).toBe(false)
	})

	test('Deve retornar FALSE se o email não conter ".com" e "@"', async () => {
		const res = validateEmailDM('mockusergmail')
		expect(res).toBe(false)
	})
})
