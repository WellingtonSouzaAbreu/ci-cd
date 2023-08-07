import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { StartupStackParamList } from '@routes/stacks/StartupStack/types'

export type SplashScreenProps = NativeStackScreenProps<StartupStackParamList, 'Splash'>
export type RegisterStackScreenProps = NativeStackScreenProps<StartupStackParamList, 'RegisterStack'>
