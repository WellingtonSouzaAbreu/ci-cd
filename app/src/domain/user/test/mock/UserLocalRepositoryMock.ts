import { UserLocalRepositoryInterface } from '@domain/user/provider/UserLocalRepositoryInterface'

export const userLocalRepositoryMockMethods: UserLocalRepositoryInterface = {
	getLocalUserData: jest.fn(),
	getUserPreferences: jest.fn(),
	updateLocalUser: jest.fn(),
	updateUserPreferences: jest.fn()
}

export function mockUserLocalRepoMethod(AAA: jest.MockedClass<any>, method: object) {
	AAA.mockImplementation(() => ({ ...userLocalRepositoryMockMethods, ...method }))
}
