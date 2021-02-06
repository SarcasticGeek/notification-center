const NotificationStatus = require("../../constants/NotificationStatus");

module.exports = {
  friendlyName: 'Fetch',
  description: 'Fetch limitied notifications by channel',
  inputs: {
    limit: {
      type: 'number',
      required: true,
    },
    channel: {
      type: 'string',
      required: true,
    }
  },
  fn: async function (inputs) {
    let notifications =  await Notification.find({
      where: {
        status: NotificationStatus.CREATED,
        channel: inputs.channel,
      },
      limit: inputs.limit,
      sort: 'priority ASC'
    });

    let ids = await notifications.map(notification => notification.id);
    await sails.helpers.notifications.changestatus.with({ids, nextStatus: NotificationStatus.IN_PROGRESS});

    return await notifications;
  }
};
