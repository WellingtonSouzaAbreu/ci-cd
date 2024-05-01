import { useNavigation } from '@react-navigation/native'

import { HomeScreenProps } from '../StartupStack/screenProps'

function useAuthNavigation() {
	const router = useNavigation<HomeScreenProps['navigation']>()

	const navigateToHome = () => {
		router.reset({
			index: 0,
			routes: [{ name: 'HomeTab' }]
		})
	}

	const navigateToAuthScreen = () => {
		router.reset({
			index: 0,
			routes: [{ name: 'SelectAuthRegister' }]
		})
	}

	return { navigateToHome, navigateToAuthScreen }
}

export { useAuthNavigation }
