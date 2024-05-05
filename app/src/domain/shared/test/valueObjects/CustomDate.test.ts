import { CustomDate } from '../../valueObjects/CustomDate'

describe('Value Object CustomDate.ts', () => {
	test('Deve criar uma CustomDate a partir de um objeto Date', () => {
		const dateObject = new Date(2024, 4, 1) // 2024-05-01
		const customDate = new CustomDate(dateObject)
		expect(customDate.value).toBe(dateObject)
	})

	test('Deve criar uma CustomDate a partir de uma data válida passada como string', () => {
		const dateString = '2024-05-01'
		const customDate = new CustomDate(dateString)
		expect(customDate.value).toBeInstanceOf(Date)
		expect(customDate.value.getUTCFullYear()).toBe(2024)
		expect(customDate.value.getUTCMonth()).toBe(4) // Note que Janeiro é 0 e Dezembro é 11
		expect(customDate.value.getUTCDate()).toBe(1)
	})
	test('Deve criar uma CustomDate a partir de uma string de data válida', () => {
		const dateString = '2024-05-01'
		const customDate = new CustomDate(dateString)
		expect(customDate.value).toBeInstanceOf(Date)
	})

	test('Deve lançar um erro ao criar uma CustomDate a partir de uma string de data inválida', () => {
		const invalidDateString = '2024-05-'
		expect(() => new CustomDate(invalidDateString)).toThrow('A data está em um formato inválido!')
	})

	test('Deve lançar um erro ao criar uma CustomDate a partir de uma data indefinida', () => {
		expect(() => new CustomDate(undefined)).toThrow('A data não pode ser indefinida!')
	})

	test('Deve formatar a data corretamente para o formato dia/mês', () => {
		const dateString1 = '2024-05-01'
		const dateString2 = '2024-05-20'
		const customDate1 = new CustomDate(dateString1)
		const customDate2 = new CustomDate(dateString2)

		expect(customDate1.formatDateToDayMonth()).toBe('01/mai')
		expect(customDate2.formatDateToDayMonth()).toBe('20/mai')
	})

	test('Deve formatar a data corretamente para o formato dia/mês com aumento de mês', () => {
		const dateString = '2024-05-01'
		const customDate = new CustomDate(dateString)
		expect(customDate.formatDateToDayMonth(1)).toBe('01/jun')
	})

	test('Deve lançar um erro ao criar uma CustomDate com um tipo de data inválido', () => {
		expect(() => new CustomDate(123 as any)).toThrow('A data está em um formato inválido!')
	})

	test('Deve lançar um erro ao criar uma CustomDate com uma data inválida passada como string', () => {
		const invalidDateString = '2024-05-'
		expect(() => new CustomDate(invalidDateString)).toThrow('A data está em um formato inválido!')
	})
})
