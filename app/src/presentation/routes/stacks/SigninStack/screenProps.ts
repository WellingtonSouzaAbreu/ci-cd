import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { SigninStackParamList } from '@routes/stacks/SigninStack/types'

export type InsertEmailAccountScreenProps = NativeStackScreenProps<SigninStackParamList, 'InsertEmailAccount'>
export type InsertPasswordAccountScreenProps = NativeStackScreenProps<SigninStackParamList, 'InsertPasswordAccount'>

export type HomeScreenProps = NativeStackScreenProps<SigninStackParamList, 'HomeTab'>
