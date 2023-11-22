const org = process.argv;

console.log('Arguments passed org:', org);

function replaceEnvAndOrg(org, env, fileContent){
    fileContent=String(fileContent)
    fileContent.replace("{env}",env)
    fileContent.replace("{org}",org)

    console.log(fileContent);

    return fileContent
}

