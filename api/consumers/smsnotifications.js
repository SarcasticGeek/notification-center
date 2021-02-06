exports.default = {
  fn: async function (message) {
    console.log('sending to SMS provider', message.body);
  }
};
