import { sharedErrors } from '@domain/constants/shared/errorMessages'
import { Id } from '@domain/shared/valueObjects/Id'

describe('File Id.ts', () => {
	test('Deve criar um objeto Id com um ID válido', () => {
		const validId = 'abc123'
		const id = new Id(validId)
		expect(id.value).toBe(validId)
	})

	test('Deve lançar um erro se o ID estiver vazio', () => {
		expect(() => new Id('')).toThrow(sharedErrors.INVALID_ID)
	})

	test('Deve lançar um erro se o ID for inválido', () => {
		const invalidId = '!@#$%'
		expect(() => new Id(invalidId)).toThrow(sharedErrors.INVALID_ID)
	})

	test('O método isEqual deve retornar verdadeiro para IDs iguais', () => {
		const id1 = new Id('abc123')
		const id2 = new Id('abc123')
		expect(id1.isEqual(id2)).toBe(true)
	})

	test('O método isEqual deve retornar falso para IDs diferentes', () => {
		const id1 = new Id('abc123')
		const id2 = new Id('xyz789')
		expect(id1.isEqual(id2)).toBe(false)
	})

	test('O método isDifferent deve retornar verdadeiro para IDs diferentes', () => {
		const id1 = new Id('abc123')
		const id2 = new Id('xyz789')
		expect(id1.isDifferent(id2)).toBe(true)
	})

	test('O método isDifferent deve retornar falso para IDs iguais', () => {
		const id1 = new Id('abc123')
		const id2 = new Id('abc123')
		expect(id1.isDifferent(id2)).toBe(false)
	})
})
