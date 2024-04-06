import React, { createContext, useMemo, useState } from 'react'

import { UserData } from '@domain/user/entity/types'

type UserDataContextMethods = {
	setUserDataOnContext: (data: UserData) => void
}

type UserDataContextType = UserDataContextMethods & {
	userDataContext?: UserData
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
	const [userDataContext, setUserDataContext] = useState<UserData>()

	const setUserDataOnContext = async (data: UserData) => {
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
