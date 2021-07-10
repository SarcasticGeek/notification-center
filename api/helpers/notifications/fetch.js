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

    return await sails.helpers.notifications.changeStatus.with({
      ids: await notifications.map(notification => notification.id),
      nextStatus: NotificationStatus.IN_PROGRESS
    });
  }
};
