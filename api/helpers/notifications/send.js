const NotificationStatus = require("../../constants/NotificationStatus");
const Providers = require("../../constants/Providers");

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
        const providerInputs = {receivers: notification.receivers, body: notification.body, type: notification.type};

        switch (channel) {
          case Providers.SMS:
            await sails.helpers.sms.send.with(providerInputs);
            break;
          case Providers.EMAIL:
            await sails.helpers.email.send.with(providerInputs);
            break;
          default:
            break;
        }

        console.log(`sending to ${channel} provider`, notification);
        return await sails.helpers.notifications.changeStatus.with({ids: notification.id, nextStatus: NotificationStatus.SENT});
      } catch (error) {
        return await sails.helpers.notifications.changeStatus.with({ids: notification.id, nextStatus: NotificationStatus.FAILED});
      }
    }
  }
};
