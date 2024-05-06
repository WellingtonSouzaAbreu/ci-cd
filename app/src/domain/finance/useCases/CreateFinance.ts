import { Class } from '@domain/shared/interfaces/Class'
import { UseCase } from '@domain/shared/interfaces/UseCase'
import { UserEntity } from '@domain/user/model/entity/types'

import { FinanceEntity, FinanceEntityOptional } from '../model/entity/types'

import { FinanceRemoteRepository } from '@data/finance/FinanceRemoteRepository'

import { Finance } from '../model/entity/Finance'
import { FinanceRemoteRepositoryInterface } from '../provider'

type Input = FinanceEntityOptional

type Output = Promise<FinanceEntity>

export class CreateFinance implements UseCase<Input, Output> {
	private remoteRepository: FinanceRemoteRepositoryInterface
	private currentUser: UserEntity

	constructor(FinanceLocalRepository: Class<FinanceRemoteRepository>, currentUser: UserEntity) {
		this.remoteRepository = new FinanceLocalRepository()
		this.currentUser = currentUser // REFACTOR Entidade de usuário
	}

	async exec(financeData: Input): Output {
		const financeRegisterData = {
			...financeData,
			createdAt: new Date(),
			updatedAt: new Date(),
			ownerId: this.currentUser.id,
		} as FinanceEntity

		const { data } = new Finance(financeRegisterData, true)
		const savedFinance = await this.remoteRepository.createFinance(data)
		return savedFinance
	}
}
