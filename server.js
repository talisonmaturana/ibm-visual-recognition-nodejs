require('dotenv').config({ silent: true });

const app = require('./app');

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = server;