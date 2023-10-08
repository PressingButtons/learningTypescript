import { speak } from "./utils/communication.js"

let message : Array<string> = [
    "Hello Typescript!",
    "My doal for this project is to become fluent with this language.",
    "Perhaps this will even lead to landing a job."
]

speak( { dialogue: message} );