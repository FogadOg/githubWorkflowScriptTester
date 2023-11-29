const org = process.env.INPUT_ORG;
const env = process.env.INPUT_ENV;
const manifest = process.env.INPUT_MANIFEST;

const fs = require("fs");

function replaceEnvAndOrg(org, env, manifest){

    fs.readFile("config.yaml", (err, data) => {
        if (err) throw err;
        text=data.toString();

        console.log("text: ",text);

        substitutedText=text.replace("{org}",org).replace("{env}",env)
                            


        console.log(`::set-output name=result::${substitutedText.replace(/\n/g, '%0A')}`);

        
      });


    

}

replaceEnvAndOrg(org, env, manifest)


