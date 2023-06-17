if ("webkitSpeechRecognition" in window) {
  let speechRecognition = new webkitSpeechRecognition();
  speechRecognition.continuous = true;
  speechRecognition.interim = true;
  speechRecognition.lang = "en-US";
} else {
  console.log("Speech Recognition not available");
}
