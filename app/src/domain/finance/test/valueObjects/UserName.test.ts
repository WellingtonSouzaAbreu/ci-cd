import { UserName } from '@/domain/user/model/valueObjects/UserName'

describe('File UserName.ts', () => {
	test('Deve criar um UserName com o valor correto', () => {
		const userNameValue = 'usuario123'
		const userName = new UserName(userNameValue)
		expect(userName.value).toBe(userNameValue)
	})

	test('Deve lançar um erro ao criar um UserName com um valor vazio', () => {
		const emptyUserNameValue = ''
		expect(() => new UserName(emptyUserNameValue)).toThrow('Esse nome não é válido!')
	})

	test('Deve lançar um erro ao criar um UserName com um valor nulo', () => {
		const nullUserNameValue = null
		expect(() => new UserName(nullUserNameValue as any)).toThrow('Esse nome não é válido!')
	})

	test('Deve lançar um erro ao criar um UserName com um valor undefined', () => {
		const undefinedUserNameValue = undefined
		expect(() => new UserName(undefinedUserNameValue as any)).toThrow('Esse nome não é válido!')
	})

	test('Deve lançar um erro ao criar um UserName com um valor contendo apenas espaços', () => {
		const spacesUserNameValue = '   '
		expect(() => new UserName(spacesUserNameValue)).toThrow('Esse nome não é válido!')
	})

	test('Deve lançar um erro ao criar um UserName com um valor contendo apenas espaços em branco', () => {
		const whitespaceUserNameValue = '\t\n\r'
		expect(() => new UserName(whitespaceUserNameValue)).toThrow('Esse nome não é válido!')
	})

	test('Deve criar um UserName com o valor correto quando o valor passado é uma string não nula e não vazia', () => {
		const validUserNameValue = 'usuario123'
		const userName = new UserName(validUserNameValue)
		expect(userName.value).toBe(validUserNameValue)
	})

	test('Deve criar um UserName com o valor correto quando o valor é passado como uma string contendo apenas espaços', () => {
		const spacesUserNameValue = '   usuario123   '
		const trimmedValue = 'usuario123'
		const userName = new UserName(spacesUserNameValue)
		expect(userName.value).toBe(trimmedValue)
	})
})
