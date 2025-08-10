import openai from "./openaiConfig.js"

async function main() {
    const file = await openai.files.retrieve("your_file_id")
    console.log(file)
}

main();