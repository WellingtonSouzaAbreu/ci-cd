import { Finance } from '@domain/finance/model/entity/Finance'
import { FinanceEntity } from '@domain/finance/model/entity/types'

const financeData: FinanceEntity = {
	id: 'idValido123',
	ownerId: 'OwnerIdValido123',
	financeCategory: 'Games',
	numberOfInstallments: 2,
	reminder: 'Lembrete',
	type: 'expense',
	value: 500,
	date: new Date(),
	createdAt: new Date(),
	updatedAt: new Date()
}
describe('Value Object Finance.ts', () => {
	test('Deve criar uma finança corretamente', () => {
		const finance = new Finance(financeData)
		expect(JSON.stringify(finance.data)).toBe(JSON.stringify(financeData))
	})

	test('Deve retornar os dados de finanças corretamente', () => {
		const finance = new Finance(financeData)
		expect(finance.id.value).toBe('idValido123')
	})

	test('Deve lançar erro se for um objeto novo  corretamente uma finança sem data de atualização e criação', () => {
		const finance = new Finance(financeData)
		expect(finance.createdAt.value).toBeInstanceOf(Date)
		expect(finance.updatedAt.value).toBeInstanceOf(Date)
	})

	test('Deve criar corretamente uma finança sem data de atualização e criação', () => {
		const finance = new Finance(financeData)
		expect(finance.createdAt.value).toBeInstanceOf(Date)
		expect(finance.updatedAt.value).toBeInstanceOf(Date)
	})

	test('Deve criar uma finança corretamente se for passado um id válido', () => {
		const finance = new Finance(financeData)
		expect(finance.id.value).toBe('idValido123')
	})
})
