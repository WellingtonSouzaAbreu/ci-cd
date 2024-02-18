import { useNavigation } from '@react-navigation/native'
import { useContext, useState } from 'react'

import { RegisterContext } from '@contexts/RegisterContext'

import { WelcomeNewUserScreenProps } from '@routes/stacks/RegisterStack/screenProps'

function useViewModel() {
	const { userRegistrationData } = useContext(RegisterContext)
	const navigation: WelcomeNewUserScreenProps['navigation'] = useNavigation()

	const [termsOfServiceHasAccepted, setTermsOfServiceHasAccepted] = useState<boolean>(false)

	const getUserName = () => {
		if (userRegistrationData && !userRegistrationData.name) return 'amigo'
		if (userRegistrationData.name.includes(' ')) {
			return userRegistrationData.name.split(' ')[0]
		}
		return userRegistrationData.name
	}

	const submitTermsAndConditions = () => {
		navigation.reset({ index: 0, routes: [{ name: 'Home' }] })
	}

	return {
		termsOfServiceHasAccepted,
		setTermsOfServiceHasAccepted,
		getUserName,
		submitTermsAndConditions
	}
}

export { useViewModel }
