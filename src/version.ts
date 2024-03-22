import package_json from '../package.json';

export const version = () => {
console.log(
`
node-mongo-cli v${package_json.version}
`
);
}
