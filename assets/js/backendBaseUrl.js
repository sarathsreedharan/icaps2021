import { test } from "../config/env.js";
let backendBaseUrl,rocketchatUrl;
if(test) {
    backendBaseUrl = "http://192.168.0.224:5444";
    rocketchatUrl = "http://192.168.0.224:3000";
} else {
    backendBaseUrl = 'https://icaps21.icaps-conference.org';
    rocketchatUrl = "https://icaps21.icaps-conference.org/rocketchat";
}
export { backendBaseUrl, rocketchatUrl};
