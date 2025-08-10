import openai from "./openaiConfig.js";

async function main(){

    const deletedFile = await openai.files.delete("your_file_id");
    console.log(deletedFile);

}

main();