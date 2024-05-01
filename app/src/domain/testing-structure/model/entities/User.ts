/* eslint-disable no-useless-catch */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

import { UserEntity } from './types'

import { Email } from '../objectValues/Email'
import { UserName } from '../../../finance/model/objectValues/UserName'

export class User {
	private password: string
	name: UserName
	email: Email

	constructor(props: UserEntity) {
		this.password = props.password
		this.name = new UserName(props.name)
		this.email = new Email(props.email)
	}

	getData(): UserEntity {
		return {
			password: this.password,
			name: this.name.value,
			email: this.email.value
		}
	}
}
