const Providers = require("../api/constants/Providers");

module.exports = {
  friendlyName: 'Chunk notifications',
  inputs: {
    limit: {
      type: 'number',
      defaultsTo: 10
    },
    channel: {
      type: 'string',
      defaultsTo: Providers.SMS
    }
  },
  fn: async function ({limit, channel}, exits) {
    let notifications = await sails.helpers.notifications.fetch.with({limit, channel});
    if (!notifications.length) {
      sails.log.error('No Messages');
      
      return await exits.error();
    }

    await sails.helpers.notifications.publish.with({notifications, channel});

    return await exits.success();
  }


};

