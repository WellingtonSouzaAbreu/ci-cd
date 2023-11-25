import React from 'react'
import { Text } from 'react-native'

import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'

function Home() {
	return (
		<ScreenContainer>
			<Text>
				{'This is Home'}
			</Text>
		</ScreenContainer>
	)
}

export { Home }
