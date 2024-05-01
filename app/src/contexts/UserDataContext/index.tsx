import React, { createContext, useMemo, useState } from 'react'

import { UserEntity } from '@domain/user/entity/types'

type UserDataContextMethods = {
	setUserDataOnContext: (data: UserEntity) => void
}

type UserDataContextType = UserDataContextMethods & {
	userDataContext?: UserEntity
}

interface UserDataProviderProps {
	children: React.ReactNode
}

const initialValue = {
	userDataContext: {},
	setUserDataOnContext: () => null
}

const UserDataContext = createContext<UserDataContextType>(initialValue)

function UserDataProvider({ children }: UserDataProviderProps) {
	const [userDataContext, setUserDataContext] = useState<UserEntity>()

	const setUserDataOnContext = async (data: UserEntity) => {
		setUserDataContext({ ...userDataContext, ...data })
	}

	const userProviderData = useMemo(() => ({
		userDataContext,
		setUserDataOnContext
	}), [userDataContext])

	return (
		<UserDataContext.Provider value={userProviderData}>
			{children}
		</UserDataContext.Provider>
	)
}

export { UserDataProvider, UserDataContext }
