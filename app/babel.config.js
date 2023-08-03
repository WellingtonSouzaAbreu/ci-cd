/* eslint-disable func-names */
module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: ['module:react-native-dotenv',
			[
				'module-resolver',
				{
					root: ['./src'],
					alias: {
						'@assets': './src/assets',
						'@components': './src/components',
						'@contexts': './src/contexts',
						'@routes': './src/routes',
						'@services': './src/services',
						'@screens': './src/screens',
						'@utils': './src/utils',
						'@common': './src/common',
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
