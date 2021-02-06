module.exports = {
  port: 1337,
  datastores: {
    mongodb: {
      adapter: 'sails-mongo',
      host: 'mongodb',
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
      host: 'rabbitmq',
    }],
  }
}
