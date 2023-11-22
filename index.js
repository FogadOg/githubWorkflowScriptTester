const args = process.argv; // This gets the command line arguments, excluding node and the script file

console.log('Arguments passed:', args);

function replaceEnvAndOrg(org, env, fileContent){
    console.log("org, env: ",org, env)
    fileContent=String(fileContent)

    substitutedText=fileContent.replace("{env}",env)
    substitutedText=substitutedText.replace("{org}",org)

    console.log(substitutedText);

    return substitutedText
}

console.log("args[-2], args[-1]: ",args[2], args[3]);

replaceEnvAndOrg(args[2], args[3],"This gets {org} the command line arguments, {env} excluding node and the script file")