exports.default = {
  fn: async function (message) {
    console.log('sending to EMAIL provider', message.body);
  }
};
