/* eslint-disable import/no-default-export */
import React from 'react'
import {
	View, StatusBar, TouchableOpacity, Text,
} from 'react-native'

export default function App() {
	return (
		<View>
			<StatusBar
				backgroundColor={'transparent'}
				barStyle={'dark-content'}
			/>
			<TouchableOpacity>
				<View />
				<Text>{'This is a text'}</Text>
			</TouchableOpacity>
		</View>
	)
}
