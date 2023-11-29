const fs = require("fs");

function replaceEnvAndOrg(org, env, manifest) {
    return new Promise((resolve, reject) => {
        fs.readFile("config.yaml", (err, data) => {
            if (err) reject(err);
            let text = data.toString();

            let substitutedText = text.replace("{env}", env);
            substitutedText = substitutedText.replace("{org}", org);
            console.log(substitutedText);

            process.stdout.write(substitutedText); // Outputting the substituted text to the stdout

            resolve(substitutedText); // Resolve the promise with the substituted text
        });
    });
}

module.exports = replaceEnvAndOrg;
