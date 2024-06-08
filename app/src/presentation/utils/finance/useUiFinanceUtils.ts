import { translateFinanceType } from './methods/translateFinanceType'
import { UiFinanceUtilsInterface } from './UiFinanceUtilsInterface'

function useUiFinanceUtils(): UiFinanceUtilsInterface {
	return { translateFinanceType: translateFinanceType }
}

export { useUiFinanceUtils }
