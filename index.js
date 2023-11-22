const args = process.argv; // This gets the command line arguments, excluding node and the script file

console.log('Arguments passed:', args);

function replaceEnvAndOrg(org, env, fileContent){
    fileContent=String(fileContent)
    fileContent.replace("{env}",env)
    fileContent.replace("{org}",org)

    console.log(fileContent);

    return fileContent
}

replaceEnvAndOrg(args[-2], args[-1],"This gets {org} the command line arguments, {env} excluding node and the script file")