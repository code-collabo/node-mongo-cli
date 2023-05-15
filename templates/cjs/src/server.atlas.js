const mongooseAtlasConnect = require('./db.atlas.connect');
const { app } = require('./app');

const port = process.env.PORT_ATLAS || 3000;

app.listen(port, function () {
  mongooseAtlasConnect(port);
});
