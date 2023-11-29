const org = process.env.INPUT_ORG;
const env = process.env.INPUT_ENV;
const manifest = process.env.INPUT_MANIFEST;

const fs = require("fs");

function replaceEnvAndOrg(org, env, manifest){
    console.log("org, env: ",org, env);

    fs.readFile(manifest, (err, data) => {
        if (err) throw err;
        text=data.toString();

        console.log("text: ",text);

        substitutedText=text.replace(/\{env\}/g, env)
                            .replace(/\{org\}/g, org);


        console.log(`::set-output name=result::${substitutedText.replace(/\n/g, '%0A')}`);

        
      });


    

}

replaceEnvAndOrg(org, env, manifest)


