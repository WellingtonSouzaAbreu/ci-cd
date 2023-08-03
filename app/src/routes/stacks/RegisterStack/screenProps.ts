import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RegisterStackParamList } from '@routes/stacks/RegisterStack/types'

export type SelectAuthRegisterScreenProps = NativeStackScreenProps<RegisterStackParamList, 'SelectAuthRegister'>
export type InsertUserNameScreenProps = NativeStackScreenProps<RegisterStackParamList, 'InsertUserName'>
export type InsertEmailScreenProps = NativeStackScreenProps<RegisterStackParamList, 'InsertEmail'>
export type InsertPasswordScreenProps = NativeStackScreenProps<RegisterStackParamList, 'InsertPassword'>
export type WelcomeNewUserScreenProps = NativeStackScreenProps<RegisterStackParamList, 'WelcomeNewUser'>
