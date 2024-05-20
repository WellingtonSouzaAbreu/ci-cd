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
		expect(user.updatedAt.value).toBeUndefined()
	})

	test('Deve retornar os dados do usuário corretamente', () => {
		const user = new User(userData)
		expect(user.id.value).toBe('idValido123')
	})

	test('Deve lançar criar um usuário corretamente sem data de atualização e criação', () => {
		const data = { ...userData, createdAt: null, updatedAt: null } as any
		const user = new User(data)
		expect(user.createdAt.value).toBeInstanceOf(Date)
		expect(user.updatedAt.value).toBeUndefined()
	})

	test('Deve criar um usuário corretamente se for passado um id válido', () => {
		const user = new User(userData)
		expect(user.id.value).toBe('idValido123')
	})
})
