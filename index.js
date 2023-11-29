const fs = require("fs");

function replaceEnvAndOrg(org, env, manifest, callback) {
    fs.readFile("config.yaml", (err, data) => {
        if (err) throw err;
        let text = data.toString();

        let substitutedText = text.replace("{env}", env);
        substitutedText = substitutedText.replace("{org}", org);
        console.log(substitutedText);

        // Return the substituted text via callback
        callback(substitutedText);
    });
}

module.exports = replaceEnvAndOrg;
