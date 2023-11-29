const org = process.env.INPUT_ORG;
const env = process.env.INPUT_ENV;
const manifest = process.env.INPUT_MANIFEST;

console.log("manifest: ",manifest)
///home/runner/work/_temp/baked-template-1701248034373.yaml
function replaceEnvAndOrg(org, env, manifest){
    fetch(manifest)
    .then((res) => res.text())
    .then((text) => {
    
        substitutedText=text.replace("{env}",env)
        substitutedText=substitutedText.replace("{org}",org)
    
        return substitutedText
    })
    .catch((e) => console.error(e));
}

replaceEnvAndOrg(org, env, manifest)