import { MonetaryValue } from '../../objectValues/MonetaryValue'

describe('File MonetaryValue.ts', () => {
	test('Deve retornar o valor numérico 100', () => {
		const value1 = new MonetaryValue(100).value
		const value2 = new MonetaryValue('100').value
		expect(value1).toBe(100)
		expect(value2).toBe(100)
	})

	test('Deve lançar um erro para valores não numéricos', () => {
		expect(() => new MonetaryValue('abc')).toThrow('O valor deve ser um número válido!')
	})

	test('Deve lançar um erro para valores não finitos', () => {
		expect(() => new MonetaryValue(Infinity)).toThrow('O valor deve ser um número finito!')
	})

	test('Deve lançar um erro para valores negativos ou nulos', () => {
		expect(() => new MonetaryValue(0)).toThrow('O valor não pode ser negativo e nem nulo!')
		expect(() => new MonetaryValue(-10)).toThrow('O valor não pode ser negativo e nem nulo!')
	})

	test('Deve lançar um erro para valores com mais de um ponto ou vírgula', () => {
		expect(() => new MonetaryValue('10.0.0')).toThrow('O valor deve conter no máximo um ponto ou vírgula!')
		expect(() => new MonetaryValue('10,0,0')).toThrow('O valor deve conter no máximo um ponto ou vírgula!')
	})

	test('Deve formatar o valor corretamente', () => {
		const value = new MonetaryValue(1000)
		const formattedValue = (1000).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
		expect(value.format()).toBe(formattedValue)
	})
})
