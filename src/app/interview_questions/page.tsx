"use client";
import { useState, useEffect } from "react";
import { langs } from "./langs";
export default function Page() {
  const [listenStatus, setListenStatus] = useState("off");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [finalTranscript, setFinalTranscript] = useState("");

  interface IRecog {
    continuous: boolean;
    interimResults: boolean;
    onerror: Function;
    lang: string;
    onstart: Function;
    onend: Function;
    onresult: Function;
    start: Function;
    stop: Function;
  }
  const [recognition, setRecognition] = useState<IRecog | null>(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    setRecognition(new SpeechRecognition());
  }, []);

  useEffect(() => {
    if (recognition) {
      console.log(recognition);
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
      recognition.onerror = (event: Event) => {
        console.log(event.error);
      };

      /*
    TODO: Once there is a pause it becomes final. Might want to look at result Index. It starts off at the next speech portion. 
    Pausee with resultIndex. So either always start at  i = 0 or you need to add finalTranscript to the interim? 
    
    */
      //event occurs every time a word is spoken
      recognition.onresult = (event: Event) => {
        console.log("events should fire");
        console.log(event);
        let interim = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          // console.log(event.resultIndex, "idx");
          let transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            console.log("here");
            setFinalTranscript(finalTranscript + `${transcript} `);
          } else {
            interim += transcript;
            setInterimTranscript(interim);
          }

          console.log(`interim: ${interimTranscript}`);
          // console.log(`final: ${finalTranscript}`);
        }
      };
    }
  }, [recognition, interimTranscript, finalTranscript]);

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
          <span id="final" className="text-orange-400">
            {finalTranscript}
          </span>
          <span id="interim">{interimTranscript}</span>
        </div>
      </div>
      <div>
        <button
          className="bg-gray-200 border-solid border border-black rounded-[4px]"
          onClick={() => {
            if (recognition) {
              recognition.start();
              setListenStatus("on");
            }
          }}
        >
          Start
        </button>
        <button
          className="ml-[4px] bg-gray-200 border-solid border border-black rounded-[4px]"
          onClick={() => {
            if (recognition) {
              recognition.stop();
              setListenStatus("off");
            }
          }}
        >
          Stop
        </button>
        <p>{listenStatus}</p>
      </div>
    </>
  );
}
