import { GetRemoteUserData } from '@domain/user/useCases/GetRemoteUserData'

import { mockUserData } from '../mock/data'
import { mockUserRemoteRepoMethod } from '../mock/UserRemoteRepositoryMock'

describe('UseCase GetRemoteUserData.ts', () => {
	let RemoteUserRepositoryMock: any // TODO Type
	beforeEach(() => {
		RemoteUserRepositoryMock = jest.fn().mockImplementation(() => ({}))
	})

	test('deve retornar os dados do usuário quando existirem', async () => {
		mockUserRemoteRepoMethod(RemoteUserRepositoryMock, { getUserById: () => mockUserData })
		const result = await new GetRemoteUserData(RemoteUserRepositoryMock).exec('validUserId')
		expect(result).toEqual(mockUserData)
		expect(RemoteUserRepositoryMock).toHaveBeenCalledTimes(1)
		// expect(RemoteUserRepositoryMock.mock.instances[0].getUserById).toHaveBeenCalledWith('validUserId') // REFACTOR Verificar se foi chamado com valores corretos
	})

	test('deve retornar null quando não existirem dados do usuário', async () => {
		mockUserRemoteRepoMethod(RemoteUserRepositoryMock, { getUserById: () => null })
		const result = await new GetRemoteUserData(RemoteUserRepositoryMock).exec('nonExistentUserId')
		expect(result).toBeNull()
		expect(RemoteUserRepositoryMock).toHaveBeenCalledTimes(1)
		// expect(RemoteUserRepositoryMock.mock.instances[0].getUserById).toHaveBeenCalledWith('nonExistentUserId')
	})

	test('deve lançar um erro se houver algo errado no repositório', async () => {
		const repoError = 'Erro no repositório'
		mockUserRemoteRepoMethod(RemoteUserRepositoryMock, { getUserById: () => new Error(repoError) })

		const getRemoteUserData = new GetRemoteUserData(RemoteUserRepositoryMock)
		expect(await getRemoteUserData.exec('validUserId')).toBeInstanceOf(Error)
		expect(RemoteUserRepositoryMock).toHaveBeenCalledTimes(1)
		// expect(RemoteUserRepositoryMock.mock.instances[0].getUserById).toHaveBeenCalledWith('nonExistentUserId')
	})
})
