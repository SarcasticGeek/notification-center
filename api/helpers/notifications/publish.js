module.exports = {
  friendlyName: 'Publish',
  description: 'Publish Notifications to the Queue.',
  inputs: {
    notifications: {
      type: 'ref',
      required: true,
    },
    channel: {
      type: 'string',
      required: true,
    }
  },
  fn: async function ({notifications, channel}) {
    await MQ.sendToQueue(`worker.${channel}notifications`, notifications);
  }
};

