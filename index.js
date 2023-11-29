const org = process.env.INPUT_ORG;
const env = process.env.INPUT_ENV;
const manifest = process.env.INPUT_MANIFEST;

const fs = require("fs");

function replaceEnvAndOrg(org, env, manifest, callback){
    fs.readFile("config.yaml", (err, data) => {
        if (err) throw err;
        let text = data.toString();

        let substitutedText = text.replace("{env}", env);
        substitutedText = substitutedText.replace("{org}", org);
        console.log(substitutedText);

        callback(substitutedText);
    });
}

replaceEnvAndOrg(org, env, manifest, (result) => {
    console.log("Result:", result);
});
