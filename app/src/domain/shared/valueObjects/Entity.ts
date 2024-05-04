export interface EntityProps {
	id?: string
}

export abstract class Entity<Type, Props extends EntityProps> {
	readonly id: string // VALUE Object
	readonly props: Props

	constructor(props: Props) {
		this.id = props.id // VALUE Object
		this.props = { ...props }
	}

	isEqual(anotherEntity: Entity<Type, Props>): boolean {
		return this.id === anotherEntity?.id
	}

	isDifferent(anotherEntity: Entity<Type, Props>): boolean {
		return this.id !== anotherEntity?.id
	}

	clone(newProps: Props, ...args: any): Type {
		return new (this.constructor as any)(
			{
				...this.props,
				...newProps
			},
			...args
		)
	}
}
