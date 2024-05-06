import { sharedErrors } from '@domain/constants/common/errorMessages'
import { UserEntity } from '@domain/user/model/entity/types'
import { User } from '@domain/user/model/entity/User'

const userData: UserEntity = {
	id: 'idValido123',
	name: 'John Doe',
	email: 'john.doe@example.com',
	createdAt: new Date(),
	updatedAt: new Date()
}
describe('Entity User.ts', () => {
	test('Deve criar um usuário corretamente', () => {
		const user = new User(userData)
		expect(JSON.stringify(user.data)).toBe(JSON.stringify(userData))
	})

	test('Deve criar um usuário corretamente com data de atualização inválida', () => {
		const user = new User({ ...userData, updatedAt: '' as any })
		expect(user.updatedAt.value).toBeInstanceOf(Date)
	})

	test('Deve retornar os dados do usuário corretamente', () => {
		const user = new User(userData)
		expect(user.id.value).toBe('idValido123')
	})

	test('Deve lançar erro ao criar um usuário sem data de atualização e criação', () => {
		const data = { ...userData, createdAt: null, updatedAt: null } as any
		expect(() => new User(data)).toThrow(sharedErrors.UNDEFINED_DATA)
	})

	test('Deve criar um usuário corretamente se for passado um id válido', () => {
		const user = new User(userData)
		expect(user.id.value).toBe('idValido123')
	})
})
