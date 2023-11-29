const fs = require('fs');

function replacePlaceholders(text, replacements) {
    let substitutedText = text;
    replacements.forEach((replacement) => {
        substitutedText = substitutedText.replace(replacement.placeholder, replacement.value);
    });
    return substitutedText;
}

function replaceInFile(filePath, replacements) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) reject(err);
            let text = data.toString();

            const substitutedText = replacePlaceholders(text, replacements);
            resolve(substitutedText);
        });
    });
}

async function run() {
    try {
        const replacements = [
            { placeholder: "{env}", value: process.env.INPUT_ENV },
            { placeholder: "{org}", value: process.env.INPUT_ORG }
        ];

        const manifest = process.env.INPUT_MANIFEST;

        const result = await replaceInFile(manifest, replacements);
        console.log("result: ",result);

        console.log(`::set-output name=result::${result}`);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1); // Exit with a non-zero code to indicate an error
    }
}

run();
