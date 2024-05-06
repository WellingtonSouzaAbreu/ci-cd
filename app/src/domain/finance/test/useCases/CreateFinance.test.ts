/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { financeErrors } from '@domain/constants/finance/financeErrors'
import { FinanceEntity, FinanceEntityOptional } from '@domain/finance/model/entity/types'
import { FinanceRemoteRepositoryInterface } from '@domain/finance/provider'
import { CreateFinance } from '@domain/finance/useCases/CreateFinance'
import { UserEntity } from '@domain/user/model/entity/types'

const financeData: FinanceEntity = {
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

const userData: UserEntity = {
	id: 'idValido123',
	name: 'John Doe',
	email: 'john.doe@example.com',
	createdAt: new Date(),
	updatedAt: new Date()
}

class RepositoryMock implements FinanceRemoteRepositoryInterface {
	async createFinance(data: FinanceEntityOptional): Promise<FinanceEntity> {
		return { ...data, id: 'idDoBackend' } as FinanceEntity
	}
}

describe('UseCase CreateFinance.ts', () => {
	test('Deve criar uma nova finança corretamente com novo id de finança', async () => {
		const useCase = new CreateFinance(RepositoryMock, userData)
		const result = await useCase.exec(financeData)
		expect(result).toHaveProperty('id', 'idDoBackend')
		expect(result).toHaveProperty('type', financeData.type)
		expect(result).toHaveProperty('financeCategory', financeData.financeCategory)
		expect(result).toHaveProperty('value', financeData.value)
		expect(result).toHaveProperty('reminder', financeData.reminder)
		expect(result).toHaveProperty('date', financeData.date)
		expect(result).toHaveProperty('numberOfInstallments', financeData.numberOfInstallments)
	})

	test('Deve criar uma nova finança corretamente sem informar data de criação, atualização e proprietário', async () => {
		const useCase = new CreateFinance(RepositoryMock, userData)
		const {
			updatedAt,
			createdAt,
			ownerId,
			...data
		} = financeData
		const result = await useCase.exec(data)

		expect(result.createdAt).toBeInstanceOf(Date)
		expect(result.updatedAt).toBeInstanceOf(Date)
		expect(result.ownerId).toBe(userData.id)
	})
	test('Deve criar uma nova finança corretamente o proprietário do id sendo o usuário', async () => {
		const useCase = new CreateFinance(RepositoryMock, userData)
		const result = await useCase.exec(financeData)
		expect(result).toHaveProperty('ownerId', userData.id)
	})

	test('Deve lançar erro se forem passadas propriedades erradas de finança', async () => {
		try {
			const useCase = new CreateFinance(RepositoryMock, userData)
			const invalidData = { ...financeData, type: 'invalido' } as any
			await useCase.exec(invalidData)
		} catch (error) {
			expect(error.message).toBe(financeErrors.INVALID_TYPE)
		}
	})

	// test('Deve lançar erro se forem passadas propriedades erradas de usuário', async () => {
	// 	try {
	// 		const invalidUser = { ...userData } // Gerar erro
	// 		const useCase = new CreateFinance(RepositoryMock, invalidUser)
	// 		await useCase.exec(financeData)
	// 	} catch (error) {
	// 		expect(error.message).toBe(financeErrors.INVALID_TYPE)
	// 	}
	// })
})
