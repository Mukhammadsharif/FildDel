import PushNotificationIOS from '@react-native-community/push-notification-ios'

const showNotificationIos = (title, message) => {
    PushNotificationIOS.presentLocalNotification({
        alertTitle: title,
        alertBody: message,
    })
}

export { showNotificationIos }
