const { SMS } = require("../../constants/Providers");

module.exports = {
  friendlyName: 'Chunk',
  inputs: {
    limit: {
      type: 'number',
      defaultsTo: 10
    },
    channel: {
      type: 'string',
      defaultsTo: SMS
    }
  },
  fn: async function ({limit, channel}) {
    let notifications = await sails.helpers.notifications.fetch.with({limit, channel});
    await sails.helpers.notifications.publish.with({notifications, channel});

    return await notifications;
  }
};

