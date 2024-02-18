import React from 'react'
import { TextStyle } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

import { appFonts } from '@presentation/common/fonts'

interface PrimaryCheckboxProps {
	size: number
	fillColor: string
	text: string
	isChecked: boolean
	onPress: (isChecked: boolean) => void
}

function PrimaryCheckbox({
	size, fillColor, text, isChecked, onPress
}: PrimaryCheckboxProps) {
	const styles = {
		checkboxIcon: { borderRadius: 0 },
		checkboxInnerIcon: {
			borderWidth: 2,
			borderRadius: 0
		},
		checkboxText: {
			fontFamily: appFonts.Inter400Regular,
			fontSize: parseInt(appFonts.size.small1, 10),
			textDecorationLine: 'none' as TextStyle['textDecorationLine'],
		}
	}

	return (
		<BouncyCheckbox
			size={size}
			fillColor={fillColor}
			text={text}
			isChecked={isChecked}
			iconStyle={styles.checkboxIcon}
			innerIconStyle={styles.checkboxInnerIcon}
			textStyle={styles.checkboxText}
			onPress={onPress}
		/>
	)
}

export { PrimaryCheckbox }
