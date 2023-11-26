const org = process.env.INPUT_ORG;
const env = process.env.INPUT_ENV;
const manifest = process.env.INPUT_MANIFEST;

console.log("manifest: ",manifest);
console.log("env: ",env);
console.log("org: ",org);

function replaceEnvAndOrg(org, env, fileContent){
    fileContent=String(fileContent)

    substitutedText=fileContent.replace("{env}",env)
    substitutedText=substitutedText.replace("{org}",org)

    console.log(substitutedText);

    return substitutedText
}

replaceEnvAndOrg(org, env, "manifest {org} {env}")