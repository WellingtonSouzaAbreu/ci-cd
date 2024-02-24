import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RegisterStackParamList } from '@presentation/routes/stacks/RegisterStack/types'

export type InsertUserNameScreenProps = NativeStackScreenProps<RegisterStackParamList, 'InsertUserName'>
export type InsertEmailScreenProps = NativeStackScreenProps<RegisterStackParamList, 'InsertEmail'>
export type InsertPasswordScreenProps = NativeStackScreenProps<RegisterStackParamList, 'InsertPassword'>
export type WelcomeNewUserScreenProps = NativeStackScreenProps<RegisterStackParamList, 'WelcomeNewUser'>

export type HomeTabScreenProps = NativeStackScreenProps<RegisterStackParamList, 'HomeTab'>
