/* eslint-disable import/no-default-export */
import React from 'react'
import { View, StatusBar, Text } from 'react-native'

export default function App() {
	return (
		<View>
			<StatusBar backgroundColor={'transparent'} />
			<Text>{'This is a text'}</Text>
		</View>
	)
}
