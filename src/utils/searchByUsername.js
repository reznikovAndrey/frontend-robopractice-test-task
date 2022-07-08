const dataFromServer = require('../data/data.json');

export default (username) => {
  if (!username) {
    return dataFromServer;
  }
  return dataFromServer
    .filter(({ Fullname: fullname }) => fullname.toLowerCase().includes(username.toLowerCase()));
};
