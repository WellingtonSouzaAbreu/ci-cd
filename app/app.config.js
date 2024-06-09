// eslint-disable-next-line import/no-default-export
module.exports = {
	expo: {
		name: 'Finance',
		slug: 'Finance',
		version: '1.0.0',
		scheme: 'com.finance.app',
		orientation: 'portrait',
		icon: './assets/icon.png',
		userInterfaceStyle: 'light',
		splash: {
			image: './assets/splash.png',
			resizeMode: 'contain',
			backgroundColor: '#ffffff'
		},
		assetBundlePatterns: [
			'**/*'
		],
		ios: {
			supportsTablet: true,
			bundleIdentifier: 'com.finance.app'
		},
		android: {
			adaptiveIcon: {
				foregroundImage: './assets/icon.png',
				backgroundColor: '#ffffff'
			},
			package: 'com.finance.app'
		},
		web: { favicon: './assets/icon.png' },
		plugins: [
			[
				'expo-updates',
				{ username: 'wellington-souza-abreu' }
			],
			[
				'expo-dev-launcher',
				{ launchModeExperimental: 'most-recent' }
			],
			[
				'expo-build-properties',
				{
					android: {
						compileSdkVersion: 33,
						targetSdkVersion: 33,
						buildToolsVersion: '31.0.0'
					},
					ios: { deploymentTarget: '17.0' }
				}
			]
		],
		extra: { eas: { projectId: '90191256-79b6-4c42-9ae7-057ec3857e63' } },
		runtimeVersion: { policy: 'sdkVersion' },
		updates: { url: 'https://u.expo.dev/90191256-79b6-4c42-9ae7-057ec3857e63' }
	}
}
