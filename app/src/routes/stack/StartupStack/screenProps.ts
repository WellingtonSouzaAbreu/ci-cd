import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { StartupStackParamList } from '@routes/stack/StartupStack/types'

export type SplashScreenProps = NativeStackScreenProps<StartupStackParamList, 'Splash'>
export type SelectAuthRegisterScreenProps = NativeStackScreenProps<StartupStackParamList, 'SelectAuthRegister'>
