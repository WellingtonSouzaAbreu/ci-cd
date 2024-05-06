import { Entity } from '@domain/shared/valueObjects/Entity'

interface TestEntityProps {
	id?: string;
	name: string;
	updatedAt?: Date;
}

class TestEntity extends Entity<TestEntity, TestEntityProps> {
	// eslint-disable-next-line no-useless-constructor
	constructor(props: TestEntityProps) {
		super(props)
	}
}

describe('Entity', () => {
	test('Deve criar um objeto Entity com as propriedades fornecidas', () => {
		const testProps: TestEntityProps = { id: '123', name: 'Test Entity' }
		const testEntity = new TestEntity(testProps)
		expect(testEntity.id.value).toBe(testProps.id)
		expect(testEntity.props).toEqual(testProps)
	})

	test('Deve criar um objeto Entity com as propriedades fornecidas, não contendo dados pós persistência', () => {
		const testProps: TestEntityProps = { id: '123', name: 'Test Entity', updatedAt: new Date() }
		const testEntity = new TestEntity(testProps)
		expect(testEntity.id.value).toBe(testProps.id)
		expect(testEntity.props).toEqual(testProps)
	})

	test('O método isEqual deve retornar verdadeiro para entidades com o mesmo ID', () => {
		const entity1 = new TestEntity({ id: '123', name: 'Entity 1' })
		const entity2 = new TestEntity({ id: '123', name: 'Entity 2' })
		expect(entity1.isEqual(entity2)).toBe(true)
	})

	test('O método isEqual deve retornar falso para entidades com IDs diferentes', () => {
		const entity1 = new TestEntity({ id: '123', name: 'Entity 1' })
		const entity2 = new TestEntity({ id: '456', name: 'Entity 2' })
		expect(entity1.isEqual(entity2)).toBe(false)
	})

	test('O método isDifferent deve retornar verdadeiro para entidades com IDs diferentes', () => {
		const entity1 = new TestEntity({ id: '123', name: 'Entity 1' })
		const entity2 = new TestEntity({ id: '456', name: 'Entity 2' })

		expect(entity1.isDifferent(entity2)).toBe(true)
	})

	test('O método isDifferent deve retornar falso para entidades com o mesmo ID', () => {
		const entity1 = new TestEntity({ id: '123', name: 'Entity 1' })
		const entity2 = new TestEntity({ id: '123', name: 'Entity 2' })
		expect(entity1.isDifferent(entity2)).toBe(false)
	})

	test('O método clone deve criar uma cópia da entidade com novas propriedades', () => {
		const entity1 = new TestEntity({ id: '123', name: 'Entity 1' })
		const clonedEntity = entity1.clone({ name: 'Cloned Entity' })
		expect(clonedEntity.id.value).toBe(entity1.id.value)
		expect(clonedEntity.props.name).toBe('Cloned Entity')
	})
})
