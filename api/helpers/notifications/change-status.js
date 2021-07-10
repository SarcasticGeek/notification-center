module.exports = {
  friendlyName: 'changeStatus',
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
    await Notification.update({id: ids}).set({status: nextStatus});

    return Notification.find({id: ids});
  }
};
