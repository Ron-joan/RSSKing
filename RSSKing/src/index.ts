import { Console } from "console";
import * as path from "path";
import { WsServer } from "tsrpc";
import { serviceProto } from './shared/protocols/serviceProto';
import { getNowBigInt, getOneSnowFlake } from '../utility/SnowFlake'

// Create the Server
export const server = new WsServer(serviceProto, {
    port: 3000,
    // Remove this to use binary mode (remove from the client too)
    json: true
});

// Initialize before server start
async function init() {
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // TODO
    // Prepare something... (e.g. connect the db)
    console.log(getOneSnowFlake(1));
};

// Entry function
async function main() {
    await init();
    await server.start();
}
main();