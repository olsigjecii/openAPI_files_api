import openai from "./openaiConfig.js"

async function main() {
    const file = await openai.files.retrieve("file-LMXJwBFxJAFEXfwmpCWtS7")
    console.log(file)
}

main();