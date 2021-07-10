const NotificationTypes = require("../../constants/NotificationTypes");

module.exports = {
  friendlyName: 'Send',
  description: 'Send notifications by SMS Adaptor',
  inputs: {
    body: {
      type: 'string',
      required: true,
    },
    receivers: {
      type: 'ref',
      required: true,
    },
    type: {
      type: 'string',
      required: true,
    }
  },
  fn: async function ({body, receivers, type}) {
    /**
     * TODO: Impl the SMS Interface
     */
    switch (type) {
      case NotificationTypes.GROUP:
        sails.log(`Hit the EMAIL SDK to Send bulk SMSs`, body, receivers);
        break;
      case NotificationTypes.INDIVIDUAL:
        sails.log(`Hit the EMAIL SDK to Send a SMS`, body, receivers);
        break;
    }
  }
};
