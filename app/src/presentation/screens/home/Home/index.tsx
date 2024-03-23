import React from 'react'
import { Text } from 'react-native'

import { ScreenContainer } from '@components/containers/ScreenContainer'

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
