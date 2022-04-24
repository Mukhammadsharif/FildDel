import PushNotification from 'react-native-push-notification'

const showNotification = (title, message) => {
    PushNotification.localNotification({
        channelId: 'sound_channel',
        title,
        message,
    })
}

const handleNotification = (title, message) => {
    PushNotification.localNotification({
        title,
        message,
        date: new Date(Date.now() + 5 * 1000),
    })
}
const handleCancel = () => {
    PushNotification.cancelAllLocalNotifications()
}

export { showNotification, handleNotification, handleCancel }
