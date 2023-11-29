const org = process.env.INPUT_ORG;
const env = process.env.INPUT_ENV;
const manifest = process.env.INPUT_MANIFEST;

const fs = require("fs");

function replaceEnvAndOrg(org, env, manifest){

    fs.readFile(manifest, (err, data) => {
        if (err) throw err;
        text=data.toString();

        substitutedText=text.replace("{env}",env)
        substitutedText=substitutedText.replace("{org}",org)

        console.log(`::set-output name=result::${substitutedText.replace(/\n/g, '%0A')}`);

        
        return substitutedText
      });


    

}

replaceEnvAndOrg(org, env, manifest)


