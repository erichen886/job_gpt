"use client";
import { useState, useEffect } from "react";
import { langs } from "./langs";
export default function Page() {
  const [listenStatus, setListenStatus] = useState("off");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [finalTranscript, setFinalTranscript] = useState("");
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";
  recognition.onstart = () => {
    console.log("start");
  };
  recognition.onend = () => {
    console.log("end");
    setListenStatus("end");
  };
  recognition.onerror = (event: any) => {
    console.log(event.error);
  };

  /*
  TODO: Once there is a pause it becomes final. Might want to look at result Index. It starts off at the next speech portion. 
  Pausee with resultIndex. So either always start at  i = 0 or you need to add finalTranscript to the iterim? 
  
  */
  //event occurs every time a word is spoken
  recognition.onresult = (event: any) => {
    console.log("events should fire");
    console.log(event);
    let interim = "";
    let final = "";

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final += interim;
      } else {
        interim += event.results[i][0].transcript;
        setInterimTranscript(interim);
      }
    }

    setFinalTranscript(final);
  };

  const updateCountry = () => {};

  return (
    <>
      <header>Interview Questions</header>
      <div>
        <h2>Select Language</h2>
        <select
          name="country"
          className="form-select"
          id="select_language"
          onChange={updateCountry}
        ></select>
        <select
          className="form-select"
          id="select_dialect"
          onChange={updateCountry}
        ></select>
      </div>
      <div>
        <h2>Transcript</h2>
        <div>
          <span id="final">{finalTranscript}</span>
          <span id="interim">{interimTranscript}</span>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            recognition.start();
            setListenStatus("on");
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            recognition.stop();
            setListenStatus("off");
          }}
        >
          Stop
        </button>
        <p>{listenStatus}</p>
      </div>
    </>
  );
}
