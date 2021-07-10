module.exports = {
  port: 1340,
  datastores: {
    mongodb: {
      adapter: 'sails-mongo',
      host: 'localhost',
      port: '27017',
      database: 'admin',
      user: 'root',
      password: 'root',
    },
  },
  rabbitmq: {
    connections: [{
      username: 'guest',
      password: 'guest',
      host: 'localhost',
    }],
  }
}
