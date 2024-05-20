import { UserEntity } from '@domain/user/model/entity/types'
import { GetLocalUserData } from '@domain/user/useCases/GetLocalUserData'

import { UserLocalRepositoryMock, mockUserData } from '../mock/UserLocalRepositoryMock'

describe('UseCase GetLocalUserData.ts', () => {
	test('deve retornar os dados do usuário quando existirem', async () => {
		const getLocalUserData = new GetLocalUserData(UserLocalRepositoryMock)
		const result = await getLocalUserData.exec()
		expect(result).toEqual(mockUserData)
	})

	test('deve retornar null quando não existirem dados do usuário', async () => {
		class UserLocalRepositoryEmpty extends UserLocalRepositoryMock {
			getLocalUserData(): Promise<UserEntity | null> {
				return Promise.resolve(null as UserEntity)
			}
		}
		const user = await new GetLocalUserData(UserLocalRepositoryEmpty).exec()
		expect(user).toBeNull()
	})

	test('deve lançar um erro se houver algo errado no repositório', async () => {
		const repoError = 'Erro no repositório'
		class UserLocalRepositoryErrorMock extends UserLocalRepositoryMock {
			async getLocalUserData(): Promise<UserEntity | null> {
				throw new Error(repoError)
			}
		}
		const getLocalUserData = new GetLocalUserData(UserLocalRepositoryErrorMock)
		expect((await getLocalUserData.exec().catch((err) => err.toString()))).toContain(repoError)
	})
})
