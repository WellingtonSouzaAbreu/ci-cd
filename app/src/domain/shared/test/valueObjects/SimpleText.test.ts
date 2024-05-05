import { sharedErrors } from '@domain/constants/common/errorMessages'
import { SimpleText } from '@domain/shared/valueObjects/SimpleText'

describe('Value Object SimpleText.ts', () => {
	test('Deve criar um objeto SimpleText com um valor válido', () => {
		const validValue = 'Sample text'
		const simpleText = new SimpleText(validValue)
		expect(simpleText.value).toBe(validValue)
	})

	test('Deve lançar um erro se o valor estiver vazio', () => {
		expect(() => new SimpleText('')).toThrow(sharedErrors.EMPTY_TEXT)
	})

	test('Deve lançar um erro se o valor for muito curto', () => {
		const shortValue = 'A' // menor do que o mínimo padrão de 3
		expect(() => new SimpleText(shortValue)).toThrow(sharedErrors.SHOR_TEXT)
	})

	test('Deve lançar um erro se o valor for muito longo', () => {
		const longValue = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' // maior do que o máximo padrão de 20
		expect(() => new SimpleText(longValue)).toThrow(sharedErrors.LARGE_TEXT)
	})

	test('Deve criar um objeto SimpleText com um valor válido, mesmo quando fornecido um valor muito curto', () => {
		const shortValue = 'A' // menor do que o mínimo padrão de 3
		const simpleText = new SimpleText(shortValue, 1, 20) // ajuste do mínimo para 1
		expect(simpleText.value).toBe(shortValue)
	})

	test('Deve criar um objeto SimpleText com um valor válido, mesmo quando fornecido um valor muito longo', () => {
		const longValue = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' // maior do que o máximo padrão de 20
		const simpleText = new SimpleText(longValue, 3, 100) // ajuste do máximo para 100
		expect(simpleText.value).toBe(longValue)
	})
})
