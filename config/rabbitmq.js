module.exports.rabbitmq = {
  customModelGlobal: "MQ",
  controllerDir: '/api/consumers',
  // connections: [{
  //   username: 'guest',
  //   password: 'guest',
  //   host: 'localhost',
  // }],
  connectionConfig: {
    json: true,
    heartbeatIntervalInSeconds: 5,
    reconnectTimeInSeconds: 10,
    connectionOptions: {},
    timeout: 1000,
    failAfter: 30,
    retryLimit: 400
  },
  channels: [
    {
      name: 'channel_1',
      default: true,
      prefetch: 1,
      exchanges: [ {
        name: 'worker',
        type: 'topic',
        config: {
          autoDelete: false,
          persistent: true
        }
      } ],
      queues: [{
        name: 'worker.notifications',
        config: {
          durable: false,
          autoDelete: false,
          subscribe: true,
          noBatch: true,
          durable: false,
          arguments: {
              "x-message-ttl": 0
          }
        }
      }],
      bindings: [{
        exchange: 'worker',
        target: 'worker.notifications',
        key: 'notifications'
      }]
    }
  ],
  routes: [
    { queue: 'worker.notifications',  action: '/notifications' }
  ]
};
