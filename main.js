const ZB = require("zeebe-node");
const ver = require("./node_modules/zeebe-node/package.json")

console.log(`Testing with zeebe-node ${ver.version} on Node ${process.version}` )
const zbc = new ZB.ZBClient();

zbc.topology().then(res => console.log(JSON.stringify(res, null, 2)));
