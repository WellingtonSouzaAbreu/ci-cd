import { Class } from '@domain/shared/interfaces/Class'
import { UseCase } from '@domain/shared/interfaces/UseCase'

import { UserEntity, UsertEntityOptional } from '../model/entity/types'

import { User } from '../model/entity/User'
import { UserRemoteRepositoryInterface } from '../provider/UserRemoteRepositoryInterface'

export interface Input { userId: string, userData: UsertEntityOptional }
type Output = Promise<void>

export class UpdateRemoteUser implements UseCase<Input, Output> { // TODO Sem testes
	private remoteRepository: UserRemoteRepositoryInterface

	constructor(UserRemoteRepository: Class<UserRemoteRepositoryInterface>) {
		this.remoteRepository = new UserRemoteRepository()
	}

	async exec(props: Input): Output {
		const newUserData = new User({ ...props.userData, id: props.userId } as UserEntity).data
		this.remoteRepository.updateRemoteUser(newUserData.id, newUserData)
	}
}
