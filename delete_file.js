import openai from "./openaiConfig.js";

async function main(){

    const deletedFile = await openai.files.del("file-LMXJwBFxJAFEXfwmpCWtS7");
    console.log(deletedFile);

}

main();