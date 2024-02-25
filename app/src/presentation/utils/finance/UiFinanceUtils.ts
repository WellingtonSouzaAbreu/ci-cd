import { translateFinanceType } from './methods/translateFinanceType'
import { UiFinanceUtilsInterface } from './UiFinanceUtilsInterface'

function UiFinanceUtils(): UiFinanceUtilsInterface {
	return { translateFinanceType: translateFinanceType }
}

export { UiFinanceUtils }
