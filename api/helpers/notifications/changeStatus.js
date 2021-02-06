module.exports = {
  friendlyName: 'Fetch',
  description: 'Fetch limitied notifications by channel',
  inputs: {
    ids: {
      type: 'ref',
      required: true,
    },
    nextStatus: {
      type: 'string',
      required: true,
    }
  },
  fn: async function ({ids, nextStatus}) {
    return await Notification.update({id: ids}).set({status: nextStatus});
  }
};
