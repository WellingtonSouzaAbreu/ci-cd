import { CustomDate } from '@domain/shared/valueObjects/CustomDate'
import { Entity } from '@domain/shared/valueObjects/Entity'
import { UserEntity, UsertEntityOptional } from '@domain/user/model/entity/types'

import { Email } from '../valueObjects/Email'
import { UserName } from '../valueObjects/UserName'

export class User extends Entity<User, UsertEntityOptional> {
	readonly name: UserName
	readonly email: Email
	readonly createdAt: CustomDate
	readonly updatedAt: CustomDate

	constructor(props: UserEntity) {
		super(props)

		this.name = new UserName(props.name)
		this.email = new Email(props.email)
		this.createdAt = new CustomDate(props.createdAt, true)
		this.updatedAt = new CustomDate(props.createdAt, true)
	}

	get data(): UsertEntityOptional { // REFACTOR Elaborar maneira recursiva de retornar somente objetos validados que existirem
		return { ...this.props }
	}
}
