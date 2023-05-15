import mongooseAtlasConnect from './db.atlas.connect';
import { app as app } from './app';

const port = process.env.PORT_ATLAS || 3000;

app.listen(port, () => {
  mongooseAtlasConnect(port);
});
