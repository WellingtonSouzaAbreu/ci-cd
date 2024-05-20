import AsyncStorage from '@react-native-async-storage/async-storage' // ou qualquer outra biblioteca AsyncStorage que você esteja usando

const userDataMock = { nome: 'Usuário Mock', email: 'usuario@example.com' }
const getLocalUserData = () => userDataMock

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({ getItem: jest.fn(), }))

const mockedAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>

describe('Testando getLocalUserData.ts', () => {
	beforeEach(() => {
		mockedAsyncStorage.getItem.mockClear()
	})

	it('Deve retornar os dados armazenados localmente', async () => {
		mockedAsyncStorage.getItem.mockResolvedValue(JSON.stringify(userDataMock))

		const userData = await getLocalUserData()

		expect(mockedAsyncStorage.getItem).toHaveBeenCalledWith('finance.user')
		expect(userData).toEqual(userDataMock)
	})

	it('Deve retornar um objeto vazio se não houver dados armazenados', async () => {
		mockedAsyncStorage.getItem.mockResolvedValue(null)

		const userData = await getLocalUserData()

		expect(mockedAsyncStorage.getItem).toHaveBeenCalledWith('finance.user')
		expect(userData).toEqual({})
	})

	it('Deve lançar um erro se ocorrer um erro ao acessar o armazenamento local', async () => {
		const errorMessage = 'Erro ao acessar o armazenamento local'

		mockedAsyncStorage.getItem.mockRejectedValue(new Error(errorMessage))

		await expect(getLocalUserData()).rejects.toThrow(errorMessage)
	})
})
