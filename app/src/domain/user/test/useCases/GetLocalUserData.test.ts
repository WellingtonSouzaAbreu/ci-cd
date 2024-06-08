import { Class } from '@domain/shared/interfaces/Class'
import { UserEntity } from '@domain/user/model/entity/types'
import { UserLocalRepositoryInterface } from '@domain/user/provider/UserLocalRepositoryInterface'
import { GetLocalUserData } from '@domain/user/useCases/GetLocalUserData'

import { mockUserData } from '../mock/data'
import { mockUserLocalRepoMethod, userLocalRepositoryMockMethods } from '../mock/UserLocalRepositoryMock'

describe('UseCase GetLocalUserData.ts', () => {
	let LocalUserRepositoryMock: jest.MockedClass<Class<UserLocalRepositoryInterface>>
	beforeEach(() => {
		LocalUserRepositoryMock = jest.fn().mockImplementation(() => ({ ...userLocalRepositoryMockMethods }))
	})

	test('deve retornar os dados do usuário quando existirem', async () => {
		mockUserLocalRepoMethod(LocalUserRepositoryMock, { getLocalUserData: async () => Promise.resolve(mockUserData) })
		const result = await new GetLocalUserData(LocalUserRepositoryMock).exec()
		expect(result).toEqual(mockUserData)
		expect(LocalUserRepositoryMock).toHaveBeenCalledTimes(1)
	})

	test('deve retornar null quando não existirem dados do usuário', async () => {
		mockUserLocalRepoMethod(LocalUserRepositoryMock, { getLocalUserData: async () => Promise.resolve(null as UserEntity) })
		const user = await new GetLocalUserData(LocalUserRepositoryMock).exec()
		expect(user).toBeNull()
		expect(LocalUserRepositoryMock).toHaveBeenCalledTimes(1)
	})

	test('deve lançar um erro se houver algo errado no repositório', async () => {
		const repoError = 'Erro no repositório'
		mockUserLocalRepoMethod(LocalUserRepositoryMock, { getLocalUserData: async () => new Error(repoError) })
		const getLocalUserData = new GetLocalUserData(LocalUserRepositoryMock)
		expect((await getLocalUserData.exec())).toBeInstanceOf(Error)
		expect(LocalUserRepositoryMock).toHaveBeenCalledTimes(1)
	})
})
