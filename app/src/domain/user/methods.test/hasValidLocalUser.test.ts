import { UserRepositoryInterface } from '@data/user/UserRepositoryInterface'

import { hasValidLocalUserDM } from '../methods/hasValidLocalUserDM'

const createMockUserRepository = jest.fn().mockImplementation((functions: UserRepositoryInterface['local'] | UserRepositoryInterface['remote']) => {
	return () => {
		return {
			local: { ...functions } as UserRepositoryInterface['local'],
			remote: { ...functions } as UserRepositoryInterface['remote']
		}
	}
})

const getLocalUserData = async () => ({ userId: 'mockUserId' })
const getLocalUserDataAsEmptyObject = async () => ({})
const getLocalUserDataAsNull = async () => null

describe('Testando módulo de caso de uso de usuários', () => {
	test('Deve retornar TRUE ao verificar se usuário existe localmente', async () => {
		const repositoryInterface = createMockUserRepository({ getLocalUserData })

		const res = await hasValidLocalUserDM(repositoryInterface)
		expect(res).toBe(true)
	})

	test('Deve retornar FALSE ao verificar se usuário existe localmente', async () => {
		const repositoryInterface = createMockUserRepository({ getLocalUserData: getLocalUserDataAsEmptyObject })

		const res = await hasValidLocalUserDM(repositoryInterface)
		expect(res).toBe(false)
	})

	test('Deve retornar FALSE ao verificar se usuário existe localmente', async () => {
		const repositoryInterface = createMockUserRepository({ getLocalUserData: getLocalUserDataAsNull })

		const res = await hasValidLocalUserDM(repositoryInterface)
		expect(res).toBe(false)
	})
})
