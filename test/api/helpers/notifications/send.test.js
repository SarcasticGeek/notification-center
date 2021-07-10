let chai = require('chai');
let faker = require('faker');
const uuidLib = require('uuid');
const {
  CREATED,
  SENT
} = require('../../../../api/constants/NotificationStatus');
const { SMS } = require('../../../../api/constants/Providers');
const { GROUP } = require('../../../../api/constants/NotificationTypes');
let expect = chai.expect;

let body = faker.lorem.word(1);
let uuid = uuidLib.v4();

describe('Notifications: Send', () => {
  it('Send chuncked items limited', async () => {
    let notifications = await Notification.create({
      uuid,
      body: body,
      status: CREATED,
      channel: SMS,
      type: GROUP,
      receivers: []
    }).fetch();

    let notificationsOut = await sails.helpers.notifications.send.with({
      notifications: [notifications],
      channel: SMS
    });

    expect(notificationsOut[0].status).to.deep.equal(SENT);
  });

  after(async () => {
    await Notification.destroyOne({uuid});
  });
});
