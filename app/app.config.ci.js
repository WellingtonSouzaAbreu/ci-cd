/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('./app.config.js')

module.exports = {
	...config.default.expo,
	generateBuild: {
		android: true,
		ios: false
	}
}
