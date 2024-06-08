import { NavigatorScreenParams } from '@react-navigation/native'

import { RegisterStackParamList } from '@routes/stacks/RegisterStack/types'

export type HomeTabParamList = {
	Home: undefined
	Register: NavigatorScreenParams<RegisterStackParamList>
	HistoryAndMetrics: undefined
}
