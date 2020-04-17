const packageJson = require(__dirname + "/package.json");

const env = {

};

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: "news_saver",
      script: "./build/index.js",
      env: env,
      env_develop: env
    }
  ]
};