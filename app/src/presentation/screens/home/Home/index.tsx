import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { ScreenContainer } from '@components/containers/ScreenContainer'

import { UserPreferences } from '@domain/user/entity/types'

import { useUserRepository } from '@data/user/useUserRepository'

const { local } = useUserRepository()

function Home() {
	const [userPreferences, setUserPreferences] = useState<UserPreferences>({})

	useEffect(() => {
		loadUserPreferences()
	}, [])

	const loadUserPreferences = async () => {
		const preferences = await local.getUserPreferences() // REFACTOR Deve chamar caso de uso
		console.log(preferences)
		setUserPreferences(preferences)
	}

	const toggleDeviceAuth = async () => {
		await local.updateUserPreferences({ requestDevicePasswordOnAuth: !userPreferences.requestDevicePasswordOnAuth }) // REFACTOR Deve chamar caso de uso
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
