import { Installments } from '../../model/objectValues/Installment'

describe('File Installment.ts', () => {
	test('Deve criar um Installments com o valor correto', () => {
		const installmentsValue = 6
		const installments = new Installments(installmentsValue)
		expect(installments.value).toBe(installmentsValue)
	})

	test('Deve lançar um erro ao criar um Installments com um valor abaixo do mínimo', () => {
		const installmentsValue = 0
		expect(() => new Installments(installmentsValue)).toThrow('Deve haver no mínimo 1 parcela!')
	})

	test('Deve lançar um erro ao criar um Installments com um valor acima do máximo', () => {
		const installmentsValue = 15
		expect(() => new Installments(installmentsValue)).toThrow('Deve haver no máximo 12 parcelas!')
	})

	test('Deve criar um Installments com o valor correto quando o valor está dentro dos limites mínimo e máximo', () => {
		const installmentsValue = 3
		const installments = new Installments(installmentsValue)
		expect(installments.value).toBe(installmentsValue)
	})

	test('Deve criar um Installments com o valor correto quando o valor é igual ao limite mínimo', () => {
		const installmentsValue = 1
		const installments = new Installments(installmentsValue)
		expect(installments.value).toBe(installmentsValue)
	})

	test('Deve criar um Installments com o valor correto quando o valor é igual ao limite máximo', () => {
		const installmentsValue = 12
		const installments = new Installments(installmentsValue)
		expect(installments.value).toBe(installmentsValue)
	})

	test('Deve criar um Installments com o valor correto quando o valor é passado como uma string', () => {
		const installmentsValue = '6'
		const installments = new Installments(installmentsValue)
		expect(installments.value).toBe(Number(installmentsValue))
	})

	test('Deve lançar um erro ao criar um Installments com um valor inválido', () => {
		const installmentsValue = 'invalid'
		expect(() => new Installments(installmentsValue)).toThrow('Formato de valor inválido!')
	})
})
