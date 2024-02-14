import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { StartupStackParamList } from '@presentation/routes/stacks/StartupStack/types'

export type SplashScreenProps = NativeStackScreenProps<StartupStackParamList, 'Splash'>
export type SelectAuthRegisterScreenProps = NativeStackScreenProps<StartupStackParamList, 'SelectAuthRegister'>
export type RegisterStackScreenProps = NativeStackScreenProps<StartupStackParamList, 'RegisterStack'>
export type SigninStackScreenProps = NativeStackScreenProps<StartupStackParamList, 'SigninStack'>

export type HomeScreenProps = NativeStackScreenProps<StartupStackParamList, 'HomeTab'>
