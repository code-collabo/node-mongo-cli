import package_json from '../package.json';
import { consoleLog } from '../lib/helpers';

export const version = () => {
consoleLog(
`
node-mongo-cli v${package_json.version}
`
);
}
