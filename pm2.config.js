const pkg = require('./package.json');

const port = 8000;

module.exports = {
  apps: [
    {
      name: `${pkg.name}:${port}`,
      script: 'app.js',
      watch: false,
      env: {
        PORT: port,
        NODE_ENV: "production"
      }
    },
  ],
}
