import { RFValue } from 'react-native-responsive-fontsize'
import {
	Inter_400Regular as Inter400Regular,
	Inter_700Bold as Inter700Bold
} from '@expo-google-fonts/inter'

function getAppFonts() {
	return {
		Inter400Regular,
		Inter700Bold
	}
}

export { getAppFonts }

const appFonts = {
	Inter400Regular: 'Inter400Regular',
	Inter700Bold: 'Inter700Bold',

	size: {
		smallest1: `${RFValue(9)}px`,
		smallest2: `${RFValue(10)}px`,
		smallest3: `${RFValue(11)}px`,
		small1: `${RFValue(12)}px`,
		small2: `${RFValue(13)}px`,
		small3: `${RFValue(14)}px`,
		medium1: `${RFValue(15)}px`,
		medium2: `${RFValue(16)}px`,
		medium3: `${RFValue(17)}px`,
		large1: `${RFValue(18)}px`,
		large2: `${RFValue(19)}px`,
		large3: `${RFValue(20)}px`,
		largest1: `${RFValue(21)}px`,
		largest2: `${RFValue(22)}px`,
		largest3: `${RFValue(23)}px`,
	}
}

export { appFonts }
