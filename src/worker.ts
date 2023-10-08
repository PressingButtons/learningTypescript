import { speak } from "./utils/communication.js"

self.onmessage = function( event: MessageEvent ) {
    speak(event.data);
    self.close( );
}