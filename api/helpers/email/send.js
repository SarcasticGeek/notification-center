const NotificationTypes = require("../../constants/NotificationTypes");

module.exports = {
  friendlyName: 'Send',
  description: 'Send notifications by Email Adaptor',
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
     * TODO: Impl the Email Interface
     */
    switch (type) {
      case NotificationTypes.GROUP:
        console.log(`Hit the EMAIL SDK to Send bulk Emails`, body, receivers);
        break;
      case NotificationTypes.INDIVIDUAL:
        console.log(`Hit the EMAIL SDK to Send a Email`, body, receivers);
        break;
    }
  }
};
