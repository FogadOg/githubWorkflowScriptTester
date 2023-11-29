const fs = require("fs");

async function replaceEnvAndOrg(org, env, manifest) {
    return new Promise((resolve, reject) => {
        fs.readFile(manifest, (err, data) => {
            if (err) reject(err);
            let text = data.toString();

            let substitutedText = text.replace("{env}", env);
            substitutedText = substitutedText.replace("{org}", org);
            
            resolve(substitutedText); // Resolve with the substituted text
        });
    });
}

module.exports = replaceEnvAndOrg;
