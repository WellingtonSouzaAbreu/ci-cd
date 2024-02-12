/* eslint-disable func-names */
module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'module:react-native-dotenv',
			'react-native-reanimated/plugin',
			[
				'module-resolver',
				{
					root: ['./src'],
					alias: {
						'@contexts': './src/presentation/contexts',
						'@routes': './src/presentation/routes',
						'@services': './src/services',
						'@presentation': './src/presentation',
						'@domain': './src/domain',
						'@infrastructure': './src/infrastructure',
						'@data': './src/data',
					}
				}
			]
		],
	}
}
