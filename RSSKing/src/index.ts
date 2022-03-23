import { Console } from "console";
import * as path from "path";
import { HttpServer, WsServer } from "tsrpc";
import { serviceProto } from './shared/protocols/serviceProto';
import { getNowBigInt, getOneSnowFlake } from '../utility/SnowFlake';
import { logResource} from '../RSS/Spider'
const schedule = require('node-schedule');
require('../utility/patch.js')

// Create the Server
export const server = new HttpServer(serviceProto, {
    port: 3000,
    // Remove this to use binary mode (remove from the client too)
    json: true
});

// Initialize before server start
async function init() {
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // TODO
    // Prepare something... (e.g. connect the db)


    // 定义规则
    let rule = new schedule.RecurrenceRule();
    rule.minute = 30;
    rule.second = 0;

    // 启动任务
    let job = schedule.scheduleJob(rule, logResource);

};

// Entry function
async function main() {
    await init();
    await server.start();
}
main();