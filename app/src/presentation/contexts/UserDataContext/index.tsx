import React, { createContext, useMemo, useState } from 'react'

import { UserData } from '@domain/entities/user/types'

type UserDataContextMethods = {
	setUserDataOnContext: (data: UserData) => void
}

type UserDataContextType = UserDataContextMethods & {
	userData?: UserData
}

interface UserDataProviderProps {
	children: React.ReactNode
}

const initialValue = {
	userData: {},
	setUserDataOnContext: () => null
}

const UserDataContext = createContext<UserDataContextType>(initialValue)

function UserDataProvider({ children }: UserDataProviderProps) {
	const [userData, setUserDataContext] = useState<UserData>()

	const setUserDataOnContext = async (data: UserData) => {
		setUserDataContext({
			...userData,
			...data
		})
	}

	const userProviderData = useMemo(() => ({
		userData,
		setUserDataOnContext,
	}), [userData, setUserDataOnContext])

	return (
		<UserDataContext.Provider value={userProviderData}>
			{children}
		</UserDataContext.Provider>
	)
}

export { UserDataProvider, UserDataContext }
