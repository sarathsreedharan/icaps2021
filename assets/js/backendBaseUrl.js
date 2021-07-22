import { test } from "../config/env.js";
let backendBaseUrl;
if(test) {
    backendBaseUrl = "http://3.13.255.173:5440";
} else {
    backendBaseUrl = 'https://icaps21.icaps-conference.org';
}
export {backendBaseUrl};
