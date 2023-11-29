const fs = require('fs');




function replaceInFile(filePath, env, org) {
    fs.readFile("config.yaml", (err, data) => {
        if (err) throw err;
        text=data.toString();

        substitutedText=text.replace("{env}",env)
        substitutedText=substitutedText.replace("{org}",org)
        console.log(substitutedText);
        return substitutedText
      });
}

async function run() {
    try {
        const manifest = process.env.INPUT_MANIFEST;

        const result = replaceInFile(manifest, process.env.INPUT_ENV, process.env.INPUT_ORG);
        console.log("result: ",result);

        console.log(`::set-output name=result::{result}`);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1); // Exit with a non-zero code to indicate an error
    }
}

run();
