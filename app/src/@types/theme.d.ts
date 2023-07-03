import 'styled-components'

// and extend it
declare module 'styled-components' {
	export interface DefaultTheme {
		white1: string

		black1: string

		green1: string
		green2: string
		green3: string
		green4: string
		green5: string

		gray1: string
		gray2: string
		gray3: string
		gray4: string
	}
}
