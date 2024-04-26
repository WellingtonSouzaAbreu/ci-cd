import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { FinanceRegisterStackParamList } from './types'

export type SelectFinanceTypeScreenProps = NativeStackScreenProps<FinanceRegisterStackParamList, 'SelectFinanceType'>
export type SelectFinanceCategoryScreenProps = NativeStackScreenProps<FinanceRegisterStackParamList, 'SelectFinanceCategory'>
export type InsertFinanceValueScreenProps = NativeStackScreenProps<FinanceRegisterStackParamList, 'InsertFinanceValue'>
export type InsertFinanceReminderScreenProps = NativeStackScreenProps<FinanceRegisterStackParamList, 'InsertFinanceReminder'>
export type SelectFinanceDateScreenProps = NativeStackScreenProps<FinanceRegisterStackParamList, 'SelectFinanceDate'>
export type SelectFinanceRepeatScreenProps = NativeStackScreenProps<FinanceRegisterStackParamList, 'SelectFinanceRepeat'>
