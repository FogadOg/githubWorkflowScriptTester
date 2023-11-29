const org = process.env.INPUT_ORG;
const env = process.env.INPUT_ENV;
const manifest = process.env.INPUT_MANIFEST;


function replaceEnvAndOrg(org, env, fileContent){
    fileContent=String(fileContent)

    substitutedText=fileContent.replace("{env}",env)
    substitutedText=substitutedText.replace("{org}",org)


    return substitutedText
}

replaceEnvAndOrg(org, env, "manifest {org} {env}")