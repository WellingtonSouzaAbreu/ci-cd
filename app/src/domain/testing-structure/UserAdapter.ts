import { User } from './model/entities/User'
import { Email } from './model/objectValues/Email'
import { UserName } from '../finance/model/objectValues/UserName'

export function UserAdapter() {
	return {
		User,
		UserName,
		Email
	}
}
