/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { sharedErrors } from '@domain/constants/common/errorMessages'
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
describe('Entity Finance.ts', () => {
	test('Deve criar uma finança corretamente', () => {
		const finance = new Finance(financeData)
		expect(JSON.stringify(finance.data)).toBe(JSON.stringify(financeData))
	})

	test('Deve criar uma finança corretamente com flag de registro', () => {
		const finance = new Finance(financeData, true)
		expect(JSON.stringify(finance.data)).toBe(JSON.stringify({ ...financeData, id: 'aplicationId' }))
	})

	test('Deve criar uma finança corretamente com data de atualização inválida', () => {
		const finance = new Finance({ ...financeData, id: 'aplicationId', updatedAt: '' as any }, true)
		expect(finance.updatedAt.value).toBeInstanceOf(Date)
	})

	test('Deve retornar os dados de finanças corretamente', () => {
		const finance = new Finance(financeData)
		expect(finance.id.value).toBe('idValido123')
	})

	test('Deve lançar erro ao criar uma finança sem data de atualização e criação', () => {
		const data = { ...financeData, createdAt: null, updatedAt: null } as any
		expect(() => new Finance(data)).toThrow(sharedErrors.UNDEFINED_DATA)
	})

	test('Deve criar um objeto corretamente uma finança sem data', () => {
		const finance = new Finance(financeData)
		expect(finance.createdAt.value).toBeInstanceOf(Date)
		expect(finance.updatedAt.value).toBeInstanceOf(Date)
	})

	test('Deve criar uma finança corretamente se for passado um id válido', () => {
		const finance = new Finance(financeData)
		expect(finance.id.value).toBe('idValido123')
	})
})
