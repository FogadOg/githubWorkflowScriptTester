const org = process.env.INPUT_ORG;
const env = process.env.INPUT_ENV;
const manifest = process.env.INPUT_MANIFEST;

const fs = require("fs");

function replaceEnvAndOrg(org, env, manifest){
    console.log("org, env: ", org, env);

    fs.readFile(manifest, (err, data) => {
        if (err) throw err;
        let text = data.toString();

        let substitutedText = text.replace(/\{env\}/g, env)
                                  .replace(/\{org-dash\}/g, org)
                                  .replace(/\{org-dot\}/g, org.replace("-", "."));

        console.log("new text: ", substitutedText);

        fs.writeFile(manifest, substitutedText, (err) => {
            if (err) throw err;
            console.log("File updated!");
        });
    });
}


replaceEnvAndOrg(org, env, manifest);
