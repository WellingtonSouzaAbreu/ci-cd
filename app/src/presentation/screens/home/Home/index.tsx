import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { ScreenContainer } from '@components/containers/ScreenContainer'

import { UserUseCases } from '@domain/user/adapter/UserUseCases'
import { UserPreferences } from '@domain/user/model/entity/types'

import { UserLocalRepository } from '@data/user/UserLocalRespository'

function Home() {
	const [userPreferences, setUserPreferences] = useState<UserPreferences>({})

	useEffect(() => {
		loadUserPreferences()
	}, [])

	const loadUserPreferences = async () => {
		const preferences = await UserUseCases.getUserPreferences(UserLocalRepository)
		setUserPreferences(preferences)
	}

	const toggleDeviceAuth = async () => {
		await UserUseCases.updateUserPreferences(UserLocalRepository, { requestDevicePasswordOnAuth: !userPreferences.requestDevicePasswordOnAuth })
		loadUserPreferences()
	}

	return (
		<ScreenContainer>
			<TouchableOpacity onPress={toggleDeviceAuth}>
				<Text>
					{`Device authentication: ${!!userPreferences.requestDevicePasswordOnAuth}`}
				</Text>
			</TouchableOpacity>
		</ScreenContainer>
	)
}

export { Home }
