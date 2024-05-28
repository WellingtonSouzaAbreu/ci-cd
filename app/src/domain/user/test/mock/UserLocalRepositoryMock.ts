import { UserLocalRepositoryInterface } from '@domain/user/provider/UserLocalRepositoryInterface'

export const userLocalRepositoryMockMethods: UserLocalRepositoryInterface = {
	getLocalUserData: jest.fn(),
	getUserPreferences: jest.fn(),
	updateLocalUser: jest.fn(),
	updateUserPreferences: jest.fn()
}

export function mockUserLocalRepoMethod(MockedClass: jest.MockedClass<any>, method: object) {
	MockedClass.mockImplementation(() => ({ ...userLocalRepositoryMockMethods, ...method }))
}
