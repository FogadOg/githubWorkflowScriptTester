const args = process.argv; // This gets the command line arguments, excluding node and the script file

console.log("arg[4]: ",args[4]);

function replaceEnvAndOrg(org, env, fileContent){
    fileContent=String(fileContent)

    substitutedText=fileContent.replace("{env}",env)
    substitutedText=substitutedText.replace("{org}",org)

    console.log("substitutedText: ",substitutedText);

    return substitutedText
}

replaceEnvAndOrg(args[2], args[3],"This gets {org} the command line arguments, {env} excluding node and the script file")