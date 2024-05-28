import { UserRemoteRepositoryInterface } from '@domain/user/provider/UserRemoteRepositoryInterface'

export const userRemoteRepositoryMockMethods: UserRemoteRepositoryInterface = {
	getSignInMethodsForEmail: jest.fn(),
	getUserById: jest.fn(),
	updateRemoteUser: jest.fn()
}

export function mockUserRemoteRepoMethod(MockedClass: jest.MockedClass<any>, method: object) {
	MockedClass.mockImplementation(() => ({ ...userRemoteRepositoryMockMethods, ...method }))
}
