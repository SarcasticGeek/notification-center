const Providers = require("../constants/Providers");

exports.default = {
  fn: async function (message) {
    await sails.helpers.notifications.send.with({channel: Providers.SMS, notifications: message.body});
  }
};
