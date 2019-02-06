import { format } from "date-fns";

const nu = new Date(Date.now());
const utc = new Date(Date.UTC(2019, 1, 6, 14, 12, 12, 0));
const fromString = new Date(Date.parse("2012-03-19T07:22Z"));

document.getElementById("app-date-fns").innerHTML = `
${nu}<br/>
${nu.toUTCString()}<br/>
${nu.toJSON().toString()}<br/><br/>

${format(nu, "DD/MM/YYYY HH:mm:ss")}<br/><br/>

${utc}<br/>
${utc.toUTCString()}<br/>
${utc.toJSON().toString()}<br/>
${utc.toLocaleString()}<br/><br/>

${format(utc, "DD/MM/YYYY HH:mm:ss")}<br/><br/>

${fromString}<br/>
${fromString.toUTCString()}<br/>
${fromString.toJSON().toString()}<br/><br/>

${format(fromString, "DD/MM/YYYY HH:mm:ss")}<br/><br/>
`;
