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
						'@contexts': './src/contexts',
						'@routes': './src/presentation/routes',
						'@assets': './src/presentation/assets',
						'@components': './src/presentation/components',
						'@presentationTypes': './src/presentation/presentationTypes',
						'@screens': './src/presentation/screens',
						'@utils': './src/presentation/utils',
						'@presentation': './src/presentation',
						'@services': './src/services',
						'@domain': './src/domain',
						'@infrastructure': './src/infrastructure',
						'@data': './src/data',
					}
				}
			]
		],
	}
}
