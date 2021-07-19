const redis = require("redis");

const redisClient = redis.createClient({ host:'redis', port: 6379 });

redisClient.on("error", function(error) {
    console.error(error);
  });

module.exports = redisClient
