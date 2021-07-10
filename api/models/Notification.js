const NotificationPrioritieis = require("../constants/NotificationPrioritieis");
const NotificationStatus = require("../constants/NotificationStatus");
const NotificationTypes = require("../constants/NotificationTypes");
const Providers = require("../constants/Providers");
const uuid = require('uuid');

module.exports = {
  tableName: 'notifications',
  datastore: 'mongodb',
  attributes: {
    id: {
      type: 'string',
      columnName: '_id'
    },
    uuid: {
      type: 'string',
      defaultsTo: uuid.v4(),
    },
    body: {
      type: 'string',
      required: true,
    },
    type: {
      type: 'string',
      required: true,
      isIn: [
        NotificationTypes.GROUP,
        NotificationTypes.INDIVIDUAL
      ]
    },
    status: {
      type: 'string',
      defaultsTo: NotificationStatus.CREATED,
    },
    channel: {
      type: 'string',
      required: true,
      isIn: [
        Providers.EMAIL,
        Providers.SMS,
      ]
    },
    receivers: {
      type: 'ref',
      required: true
    },
    priority: {
      type: 'number',
      defaultsTo: NotificationPrioritieis.LOW,
    },
  },

};

