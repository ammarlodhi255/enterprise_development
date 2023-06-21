const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("knock knock", () => {
    console.log("Who's there?");
});

emitter.on("knock knock", (name) => {
    console.log(`Come in ${name}`)
});

emitter.emit("knock knock", "ammar");