import * as fs from "node:fs";
import {requestRepositoriesRaw} from "./src/types/GitHubRepository";

async function createRepositoryList() {
    requestRepositoriesRaw()
        .then(data => {
            try {fs.mkdirSync('./public/repositories/')} catch(ex) {}
            let output = fs.createWriteStream("./public/repositories/meta.json")
            output.write(JSON.stringify(data))
            output.end()
        })
}

(() => {
    createRepositoryList()
    console.info("Done.")
})()