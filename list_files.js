import openai from "./openaiConfig.js";

async function main(){

    const uploadedFiles = await openai.files.list();
    // const uploadedFiles = await openai.files.list({purpose: "assistant"});

    console.log(uploadedFiles);

}

main();