import { Email } from '../model/valueObjects/Email'
import { StrongPassword } from '../model/valueObjects/StrongPassword'
import { UserName } from '../model/valueObjects/UserName'
import { WeakPassword } from '../model/valueObjects/WeakPassword'

export class UserModel {
	static UserName = UserName
	static Email = Email
	static WeakPassword = WeakPassword
	static StrongPassword = StrongPassword
}
