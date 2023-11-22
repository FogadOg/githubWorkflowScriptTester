const args = process.argv.slice(2);

const org = args[0];
const env = args[1];
const manifest = args[2];

console.log("manifest: ",manifest);

function replaceEnvAndOrg(org, env, fileContent){
    fileContent=String(fileContent)

    substitutedText=fileContent.replace("{env}",env)
    substitutedText=substitutedText.replace("{org}",org)

    console.log(substitutedText);

    return substitutedText
}

replaceEnvAndOrg(org, env, manifest)