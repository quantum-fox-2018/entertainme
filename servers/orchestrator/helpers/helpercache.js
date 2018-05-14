const redis = require("redis");
const client = redis.createClient();

const setCache = (payload) => {
  client.set('entertainme_data', JSON.stringify(payload), 'ex', 1800);
}

module.exports = setCache;