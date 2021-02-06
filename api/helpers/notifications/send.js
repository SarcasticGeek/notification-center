const NotificationStatus = require("../../constants/NotificationStatus");

module.exports = {
  friendlyName: 'Send',
  description: 'Send notifications by channel',
  inputs: {
    channel: {
      type: 'string',
      required: true,
    },
    notifications: {
      type: 'ref',
      required: true,
    }
  },
  fn: async function ({notifications, channel}) {
    for (const notification of notifications) {
      try {
        console.log(`sending to ${channel} provider`, notification);
        await sails.helpers.notifications.changestatus.with({ids: notification.id, nextStatus: NotificationStatus.SENT});
      } catch (error) {
        await sails.helpers.notifications.changestatus.with({ids: notification.id, nextStatus: NotificationStatus.FAILED});
      }
    }
  }
};
