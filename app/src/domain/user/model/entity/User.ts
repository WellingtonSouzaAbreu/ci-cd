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
		this.createdAt = new CustomDate(props.createdAt)
		this.updatedAt = new CustomDate(props.createdAt)
	}

	get data(): UsertEntityOptional {
		return {
			...this.props,
			name: this.name.value,
			email: this.email.value,
			createdAt: this.createdAt.value,
			updatedAt: this.updatedAt.value
		}
	}
}
