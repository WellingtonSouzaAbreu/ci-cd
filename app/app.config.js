/* eslint-disable import/no-default-export */
export default {
	expo: {
		name: 'Finance',
		slug: 'Finance',
		version: '1.0.0',
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
		// GOOGLE_SERVICES_JSON
		// GOOGLE_SERVICES_PLIST
		ios: {
			supportsTablet: true,
			bundleIdentifier: 'finance.app',
			googleServicesFile: process.env.GOOGLE_SERVICES_PLIST,
			infoPlist: {
				CFBundleURLTypes: [
					{ CFBundleURLSchemes: ['com.googleusercontent.apps.1098749319538-7aqvlop59p1crlldvjsjt5233l6ln00u'] }
				]
			}
		},
		android: {
			googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
			adaptiveIcon: {
				foregroundImage: './assets/adaptive-icon.png',
				backgroundColor: '#ffffff'
			},
			package: 'finance.app'
		},
		web: { favicon: './assets/favicon.png' },
		plugins: [
			[
				'@react-native-google-signin/google-signin',
				{ iosUrlScheme: 'com.googleusercontent.apps.1098749319538-7aqvlop59p1crlldvjsjt5233l6ln00u' }
			],
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
						compileSdkVersion: 31,
						targetSdkVersion: 31,
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
