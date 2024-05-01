import { UseCase } from '@domain/shared/interfaces/UseCase'
import { UserEntity } from '@domain/user/entity/types'

import { FinanceEntityOptional } from '../model/entity/types'

import { FinanceRemoteRepository, FinanceRemoteRepositoryInterface } from '@data/finance/FinanceRemoteRepository'

import { Finance } from '../model/entity/Finance'

type Input = FinanceEntityOptional

type Output = Promise<void>

export class CreateFinance implements UseCase<Input, Output> {
	private remoteRepository: FinanceRemoteRepositoryInterface
	private currentUser: UserEntity

	constructor(FinanceLocalRepository: new () => FinanceRemoteRepository, currentUser: any) {
		this.remoteRepository = new FinanceLocalRepository()
		this.currentUser = currentUser
	}

	async exec(financeData: Input): Output {
		const data = new Finance({ ...financeData, ownerId: this.currentUser.id }).props

		const savedFinance = await this.remoteRepository.createFinance(data)
		console.log(savedFinance)
	}
}
