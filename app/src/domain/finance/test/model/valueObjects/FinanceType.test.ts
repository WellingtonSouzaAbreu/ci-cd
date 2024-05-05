import { financeErrors } from '@domain/constants/finance/financeErrors'
import { FinanceType } from '@domain/finance/model/valueObjects/FinanceType'

describe('File Installment.ts', () => {
	test('Deve criar um objeto FinanceType com um tipo válido', () => {
		const validType1 = 'expense'
		const validType2 = 'expense'
		const financeType1 = new FinanceType(validType1)
		const financeType2 = new FinanceType(validType2)
		expect(financeType1.value).toBe(validType1)
		expect(financeType2.value).toBe(validType2)
	})

	test('Deve lançar um erro se o tipo estiver vazio, nulo ou undefined', () => {
		expect(() => new FinanceType('' as any)).toThrow(financeErrors.EMPTY_TYPE)
		expect(() => new FinanceType(null)).toThrow(financeErrors.EMPTY_TYPE)
		expect(() => new FinanceType(undefined)).toThrow(financeErrors.EMPTY_TYPE)
	})

	test('Deve lançar um erro se o tipo for inválido', () => {
		const invalidType = 'invalid' as any
		expect(() => new FinanceType(invalidType)).toThrow(financeErrors.INVALID_TYPE)
	})
})
