const fs = require("node:fs");
const stream = require("node:stream/promises");

async function main() {
  while (true) {
    try {
      console.log(new Date(), "started request");
      const { body }  = await fetch("http://localhost:3000");
      await stream.pipeline(
        body,
        fs.createWriteStream("/dev/null"),
      );
    } catch (e) {
      console.log(new Date(), "failed request: ", e);
      return;
    }
    console.log(new Date(), "finished request");
  }
}

main();
