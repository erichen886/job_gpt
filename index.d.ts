export {};

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
  interface Event {
    error: SpeechRecognitionErrorEvent;
    resultIndex: number;
    results: SpeechRecognitionResultList;
  }
}
