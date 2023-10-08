let message : Array<string> = [
    "Hello Typescript!",
    "My doal for this project is to become fluent with this language.",
    "Perhaps this will even lead to landing a job."
]

const worker = new Worker('assets/scripts/worker.js', {type: "module"});

worker.postMessage( {dialogue: message} );
