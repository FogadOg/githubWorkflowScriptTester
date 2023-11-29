const fs = require("fs");

function replaceEnvAndOrg(org, env, manifest) {
  return new Promise((resolve, reject) => {
    fs.readFile("config.yaml", (err, data) => {
      if (err) {
        reject(err);
      } else {
        let text = data.toString();
        let substitutedText = text.replace("{env}", env);
        substitutedText = substitutedText.replace("{org}", org);
        resolve(substitutedText);
      }
    });
  });
}

replaceEnvAndOrg(process.env.INPUT_ORG, process.env.INPUT_ENV, process.env.INPUT_MANIFEST)
  .then((replacedText) => {
    console.log(replacedText); // Output the replaced text
    process.stdout.write(`::set-output name=replacedData::${replacedText}`); // Set output for the action
  })
  .catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });
