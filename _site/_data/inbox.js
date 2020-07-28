module.exports = function () {
  const data = [];
  data.push({
    unread: true,
    starred: false,
    name: 'hans',
    subject: 'Dit is een onderwerp',
    attachment: true,
    date: '2020',
  });
  data.push({
    unread: false,
    starred: true,
    name: 'hans',
    subject: 'Dit is een onderwerp',
    attachment: false,
    date: '2020',
  });
  data.push({
    unread: true,
    starred: false,
    name: 'hans',
    subject: 'Dit is een onderwerp',
    attachment: false,
    date: '2020',
  });
  return data;
};

