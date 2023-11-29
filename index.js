const org = process.env.INPUT_ORG;
const env = process.env.INPUT_ENV;
const manifest = process.env.INPUT_MANIFEST;

const fs = require("fs");

console.log("manifest: ",manifest)
///home/runner/work/_temp/baked-template-1701248034373.yaml
function replaceEnvAndOrg(org, env, manifest){

    fs.readFile(manifest, (err, data) => {
        if (err) throw err;
        text=data.toString();

        substitutedText=text.replace("{env}",env)
        substitutedText=substitutedText.replace("{org}",org)
    
        return substitutedText
      });


    

}

replaceEnvAndOrg(org, env, manifest)