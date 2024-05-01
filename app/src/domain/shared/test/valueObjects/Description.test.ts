import { Description } from '../../Description'

describe('File Description.ts', () => {
	test('Deve criar uma Description com o valor correto', () => {
		const descriptionValue = 'Descrição'
		const description = new Description(descriptionValue)
		expect(description.value).toBe(descriptionValue)
	})

	test('Deve lançar um erro ao criar uma Description com uma descrição menor que o mínimo', () => {
		const descriptionValue = 'Short'
		expect(() => new Description(descriptionValue, 10)).toThrow('A descrição deve ter no mínimo 10 caracteres!')
	})

	test('Deve lançar um erro ao criar uma Description com uma descrição maior que o máximo', () => {
		const descriptionValue = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida feugiat felis, quis efficitur elit tincidunt eu. Sed et malesuada felis, vitae auctor nulla.'
		expect(() => new Description(descriptionValue, 0, 18)).toThrow('A descrição deve ter no máximo 18 caracteres!')
	})

	test('Deve criar uma Description com o valor correto quando a descrição está dentro dos limites mínimo e máximo', () => {
		const descriptionValue = 'Descrição dentro'
		const description = new Description(descriptionValue)
		expect(description.value).toBe(descriptionValue)
	})

	test('Deve criar uma Description com o valor correto quando a descrição é igual ao limite máximo', () => {
		const descriptionValue = 'Maximum description'
		const description = new Description(descriptionValue, 0, descriptionValue.length)
		expect(description.value).toBe(descriptionValue)
	})

	test('Deve criar uma Description com o valor correto quando a descrição é igual ao limite mínimo', () => {
		const descriptionValue = ''
		const description = new Description(descriptionValue, 0, 5)
		expect(description.value).toBe(descriptionValue)
	})
})
