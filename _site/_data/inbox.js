const faker = require('faker');

module.exports = function () {
  const data = [];
  for (let i = 1; i < 12; i++) {
    data.push ({
      unread: faker.random.boolean(),
      starred: faker.random.boolean(),
      name: faker.name.findName(),
      subject: faker.random.words(),
      attachment: faker.random.boolean(),
      date: faker.date.recent().toUTCString(),
    });
  }
  return data;
};

