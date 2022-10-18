const faker = require('faker');

module.exports = function () {
  const data = [];
  for (let i = 1; i < 12; i++) {
    data.push ({
      unread: faker.datatype.boolean(),
      starred: faker.datatype.boolean(),
      name: faker.name.findName(),
      subject: faker.random.words(),
      attachment: faker.datatype.boolean(),
      date: faker.date.recent().toUTCString(),
    });
  }
  return data;
};

