import { Class } from '@domain/shared/interfaces/Class'
import { UseCase } from '@domain/shared/interfaces/UseCase'
import { UserEntity } from '@domain/user/model/entity/types'
import { User } from '@domain/user/model/entity/User'

import { FinanceEntity, FinanceEntityOptional } from '../model/entity/types'

import { Finance } from '../model/entity/Finance'
import { FinanceLocalRepositoryInterface, FinanceRemoteRepositoryInterface } from '../provider'

type Input = FinanceEntityOptional

type Output = Promise<FinanceEntity>

export class CreateFinance implements UseCase<Input, Output> {
	private localRepository: FinanceLocalRepositoryInterface
	private remoteRepository: FinanceRemoteRepositoryInterface
	private currentUser: User

	constructor(
		FinanceLocalRepository: Class<FinanceLocalRepositoryInterface>,
		FinanceRemoteRepository: Class<FinanceRemoteRepositoryInterface>,
		currentUser: UserEntity
	) {
		this.localRepository = new FinanceLocalRepository()
		this.remoteRepository = new FinanceRemoteRepository()
		this.currentUser = new User(currentUser)
	}

	async exec(financeData: Input): Output {
		const financeRegisterData = {
			...financeData,
			createdAt: new Date(),
			updatedAt: new Date(),
			ownerId: this.currentUser.id.value,
		} as FinanceEntity

		const { data } = new Finance(financeRegisterData, true)
		const savedFinance = await this.remoteRepository.createFinance(data)
		// await this.localRepository.(data) // TODO Salvar no repositorio local com merge?
		return savedFinance
	}
}
