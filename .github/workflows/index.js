
function replaceEnvAndOrg(org, env, fileContent){
    fileContent=String(fileContent)

    substitutedText=fileContent.replace("{env}",env)
    substitutedText=substitutedText.replace("{org}",org)

    console.log(substitutedText);

    return substitutedText
}

replaceEnvAndOrg(process.env.org, process.env.env, "{env} replaced {org}")