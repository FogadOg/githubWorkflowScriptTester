const fs = require("fs");

const org = process.env.INPUT_ORG;
const env = process.env.INPUT_ENV;
const manifest = process.env.INPUT_MANIFEST;

function replaceEnvAndOrg(org, env, manifest) {
  fs.readFile("config.yaml", "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    let text = data.toString();
    console.log("Original text: \n", text);

    const substitutedText = text
      .replace(/\{env\}/g, env)
      .replace(/\{org\}/g, org);

    console.log(
      `Substituted text: \n${substitutedText.replace(/\n/g, '%0A')}`
    );

  });
}

replaceEnvAndOrg(org, env, manifest);
