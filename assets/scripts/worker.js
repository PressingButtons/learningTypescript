import { speak } from "./utils/communication.js";
self.onmessage = function (event) {
    speak(event.data);
    self.close();
};
//# sourceMappingURL=worker.js.map