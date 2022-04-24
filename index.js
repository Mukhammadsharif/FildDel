import { Platform } from 'react-native'
import 'react-native-gesture-handler'
import { registerRootComponent } from 'expo'
import PushNotificationIOS from '@react-native-community/push-notification-ios'
import PushNotification from 'react-native-push-notification'
import App from './App'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
PushNotification.createChannel(
    {
        channelId: 'sound_channel', // (required)
        channelName: 'Notification', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: true, // (optional) default: true
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
)

PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister(token) {
        console.log('TOKEN:', token)
    },

    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification(notification) {
        console.log('NOTIFICATION:', notification)

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData)
    },

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true,
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
    requestPermissions: Platform.OS === 'ios',
    // requestPermissions: true,
})
registerRootComponent(App)
