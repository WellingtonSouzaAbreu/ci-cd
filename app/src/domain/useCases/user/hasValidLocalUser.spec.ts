import { UserRepositoryAdapterInterface } from '@data/user/UserRepositoryAdapterInterface'
import { hasValidLocalUserUC } from './hasValidLocalUserUC'

const createMockUserRepository = jest.fn().mockImplementation((functions: UserRepositoryAdapterInterface['local'] | UserRepositoryAdapterInterface['remote']) => {
	return () => {
		return {
			local: { ...functions } as UserRepositoryAdapterInterface['local'],
			remote: { ...functions } as UserRepositoryAdapterInterface['remote']
		}
	}
})

const getLocalUserData = async () => ({ userId: 'mockUserId' })
const getLocalUserDataAsEmptyObject = async () => { }
const getLocalUserDataAsNull = async () => null

describe('Testando módulo de caso de uso de usuários', () => {
	test('Deve retornar TRUE ao verificar se usuário existe localmente', async () => {
		const repositoryInterface = createMockUserRepository({ getLocalUserData })

		const res = await hasValidLocalUserUC(repositoryInterface)
		expect(res).toBe(true)
	})

	test('Deve retornar FALSE ao verificar se usuário existe localmente', async () => {
		const repositoryInterface = createMockUserRepository({ getLocalUserData: getLocalUserDataAsEmptyObject })

		const res = await hasValidLocalUserUC(repositoryInterface)
		expect(res).toBe(false)
	})

	test('Deve retornar FALSE ao verificar se usuário existe localmente', async () => {
		const repositoryInterface = createMockUserRepository({ getLocalUserData: getLocalUserDataAsNull })

		const res = await hasValidLocalUserUC(repositoryInterface)
		expect(res).toBe(false)
	})
})
