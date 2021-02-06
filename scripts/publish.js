module.exports = {


  friendlyName: 'Publish',


  description: 'Publish something.',


  fn: async function () {

    await MQ.sendToQueue('worker.notifications', { test: 'test hamada' });

  }


};

