const org = process.argv[0];
const env = process.argv[1];
const fileContent = process.argv[2];

console.log('Arguments passed org:', org);
console.log('Arguments passed env:', env);
console.log('Arguments passed:', fileContent);

function replaceEnvAndOrg(org, env, fileContent){
    fileContent=String(fileContent)
    fileContent.replace("{env}",env)
    fileContent.replace("{org}",org)

    console.log(fileContent);

    return fileContent
}

