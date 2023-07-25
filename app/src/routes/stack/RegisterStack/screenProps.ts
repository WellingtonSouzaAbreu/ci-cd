import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RegisterStackParamList } from '@routes/stack/RegisterStack/types'

export type SelectAuthRegisterScreenProps = NativeStackScreenProps<RegisterStackParamList, 'SelectAuthRegister'>
export type InsertEmailScreenProps = NativeStackScreenProps<RegisterStackParamList, 'InsertEmail'>
export type InsertPasswordScreenProps = NativeStackScreenProps<RegisterStackParamList, 'InsertPassword'>
