let chai = require('chai');
let faker = require('faker');
const uuidLib = require('uuid');
const {
  IN_PROGRESS,
  CREATED
} = require('../../../../api/constants/NotificationStatus');
const { SMS } = require('../../../../api/constants/Providers');
const { GROUP } = require('../../../../api/constants/NotificationTypes');
let expect = chai.expect;

let body = faker.lorem.word(1);
let uuid = uuidLib.v4();

describe('Notifications: Chunk', () => {
  it('chunk items', async () => {
    let notification = await Notification.create({
      uuid,
      body: body,
      status: CREATED,
      channel: SMS,
      type: GROUP,
      receivers: []
    }).fetch();

    let notificationsOut = await sails.helpers.notifications.chunk.with({
      limit: 1,
      channel: SMS
    });

    expect(notificationsOut[0].status).to.deep.equal(IN_PROGRESS);
  });

  after(async () => {
    await Notification.destroyOne({uuid});
  });
});
