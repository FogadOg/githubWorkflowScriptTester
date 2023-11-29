const fs = require("fs");

function replaceEnvAndOrg(org, env, manifest) {
    return new Promise((resolve, reject) => {
        fs.readFile("config.yaml", (err, data) => {
            if (err) reject(err);
            let text = data.toString();

            let substitutedText = text.replace("{env}", env);
            substitutedText = substitutedText.replace("{org}", org);
            console.log(substitutedText);

            process.stdout.write(substitutedText);

            resolve(substitutedText);
        });
    });
}

module.exports = replaceEnvAndOrg;
